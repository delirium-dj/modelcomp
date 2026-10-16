# Gemini 3.5 Flash-Lite — findings by Cat Jam

- Source: Google / Gemini 3.5 Flash-Lite (`opencode/gemini-3-5-flash-lite`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's cheapest Flash-tier in the Gemini 3.5 family (released ~July 21, 2026 in blog alongside 3.6 Flash; context 1M, 64K output, thinking minimal/low/medium/high, ultra-low cost). Targets high-throughput extraction/routing.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.5-flash-lite`), Vertex AI, Gemini Enterprise. Text/image/video/audio in; text out.
- **Release / knowledge:** Released July 21, 2026 (blog); knowledge cutoff not stated in sampled docs (likely Jan 2025 family).
- **IDs:** `gemini-3.5-flash-lite` (Google), OpenRouter likely available? Not checked.
- **Context window:** 1,000,000 tokens (per Gemini 3.5 Flash model card/3.5 Flash-Lite blog); max output 65,536 (from 3.6 Flash docs says 65,536).
- **Modalities:** Text, image, video, audio in; text out. Thinking (minimal default, low, medium, high). Function calling, structured output.
- **Pricing (as of 2026-10-16):** $0.30/$2.50 per 1M input/output (from blog/3.5 Flash-Lite release); free tier? Gemini typically no charge? Use official pricing noted in blog (paid tier). Batch/Flex? not in sampled source.
- **Architecture:** Proprietary, based on Gemini 3.5 family. No open weights.

### Raw benchmarks found (from Google launch blog, relative to Gemini 3.1 Flash-Lite)

- HLE (no tools): 18.0% (vs 11.0% for prior Flash-Lite)
- CharXiv: 74.5% (vs 63.7%)
- Terminal-Bench 2.1: 54% (vs 31%)
- SWE-Bench Pro: 54.2% (vs 49.6% for 3 Flash older)
- OSWorld-Verified: 74.0% (vs 65.1% for 3 Flash older)
- MRCR/GDM-MRCR: 72.2% (vs 60.1%)
- GDPval-AA v2: 1140 (vs 642)
- LiveCodeBench? not sampled exact
- Also "significantly outperforms prior Flash-Lite generations in agentic workflows"
- Speed 350 tok/s (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 54%, MRCR 72.2, GDPval 1140, SWE-Pro 54.2; agent roots better but still lags 3.6/3.8.
- **Reasoning: 74/100.** HLE 18.0%, CharXiv 74.5, GPQA? not sampled; speed oriented.
- **Context window: 88/100.** 1M context, MRCR 72.2 (128K?) from smaller baseline.
- **Multimodal: 82/100.** Text/image/video/audio, CharXiv 74.5, HLE text+MM 18.0.
- **Coding: 74/100.** SWE-Pro 54.2, TB2.1 54, MRCR, OSWorld 74.
- **Cost efficiency: 96/100.** $0.30/$2.50 per 1M, 350 tok/s. Ultra-cheap.
- **Overall Score: 79/100.** Mean (78+74+88+82+74)/5 = 79.2. Ultra-cheap high-throughput companion to 3.5 Flash; for extraction/routing rather than frontier coding.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Google blog/3.5 Flash-Lite launch, AI/TLDR, AA speed); scores are normalized 1–100 interpretations. Be aware the benchmark comparisons target older/larger Flash models.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
