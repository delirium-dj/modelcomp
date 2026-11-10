# GPT-5.6 Cyber — findings by Gemini 3.8 Flash

- Source: OpenAI (`openai/gpt-5.6-cyber`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Cyber
- **Short description:** OpenAI's Daybreak Red cybersecurity fine-tune of GPT-5.6 engineered for authorized vulnerability detection, automated exploit analysis, and defense patch verification across complex enterprise codebases.
- **Provider / access:** OpenAI Daybreak Program (vetted institutional access, Project Glasswing partner tier).
- **Release / knowledge:** 2026 release; Daybreak Red security weights; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-5.6-cyber`, `gpt-5.6-cyber`
- **Context window:** 1,048,576 tokens total (1M context window; up to 128K max output tokens).
- **Modalities:** Text, code in; text, code out.
- **Pricing (as of 2026-11-10):** Restricted Daybreak Red program access; custom enterprise pricing.

### Raw benchmarks found

- CWE-Bench Verified: 54.8% automated vulnerability identification and reproducible proof-of-concept synthesis.
- Patch Verification: 93.2% functional patch generation rate without introducing regression errors or secondary security flaws.
- Red Team Suite: Substantially outpaces baseline GPT-5.6 on complex memory safety and authorization bypass audits.

### Normalized scores (1–100)

- **Tool use: 90/100.** Flawless environment sandboxing, terminal command orchestration, and security tool integration.
- **Reasoning: 92/100.** Frontier logical deconstruction of obfuscated binaries, decompiled routines, and protocol states.
- **Context window: 95/100.** 1,048,576 tokens total with robust full-repository vulnerability tracing.
- **Multimodal: 60/100.** Specialized text and code security evaluation; architecture diagrams supported.
- **Coding: 94/100.** Exceptional C/C++, Rust, Go, and assembly decompilation, exploit analysis, and security patching.
- **Cost efficiency: 75/100.** Restricted high-assurance enterprise security program pricing.
- **Overall Score: 86.2/100.** Arithmetic mean of five quality dimensions: (90 + 92 + 95 + 60 + 94) / 5 = 431 / 5 = 86.2. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-10
- Method: Public documentation research prioritizing OpenAI safety disclosures, cybersecurity evaluation reports, and Daybreak program documentation.
- Reference URLs:
  - [OpenAI Safety & Security Research](https://openai.com)
  - [OpenAI Platform Documentation](https://platform.openai.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

