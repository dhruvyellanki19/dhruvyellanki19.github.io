#!/usr/bin/env python3
"""
Extract text content from PDF files for portfolio website update
"""
import pdfplumber
import json
import sys

def extract_pdf_text(pdf_path):
    """Extract all text from a PDF file"""
    try:
        text_content = []
        with pdfplumber.open(pdf_path) as pdf:
            for page_num, page in enumerate(pdf.pages, 1):
                text = page.extract_text()
                if text:
                    text_content.append(f"--- Page {page_num} ---\n{text}\n")
        return "\n".join(text_content)
    except Exception as e:
        return f"Error reading {pdf_path}: {str(e)}"

def main():
    # PDF files to process
    pdf_files = [
        "Profile.pdf",
        "Sai_Dhruv_Yellanki_Resume copy.pdf"
    ]
    
    results = {}
    
    for pdf_file in pdf_files:
        print(f"Processing {pdf_file}...")
        text = extract_pdf_text(pdf_file)
        results[pdf_file] = text
        
        # Save individual text files
        output_file = pdf_file.replace('.pdf', '_extracted.txt')
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Saved to {output_file}")
    
    # Save combined JSON
    with open('extracted_resume_data.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print("\nExtraction complete!")
    print("Files created:")
    for pdf_file in pdf_files:
        print(f"  - {pdf_file.replace('.pdf', '_extracted.txt')}")
    print("  - extracted_resume_data.json")

if __name__ == "__main__":
    main()
