# MAI-Thinking-1 — findings by Muse Glimmer 30B

- Source: Microsoft AI / MAI-Thinking-1
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first in-house reasoning model, a sparse Mixture-of-Experts with 35B active / ~1T total parameters trained from scratch without distillation, focused on STEM reasoning, agentic coding and enterprise instruction following.
- **Provider / access:** Microsoft Foundry / Azure AI Catalog `MAI-Thinking-1`; Chat Completions API. Enterprise preview.
- **Release / knowledge:** 2026-06-02; knowledge cutoff not published.
- **IDs:** `MAI-Thinking-1`
- **Context window:** 256K tokens total, 64K maximum output per Microsoft Foundry catalog; source marks window as documented.
- **Modalities:** Input text; Output text. Explicit reasoning mode, function calling, tool use supported. No verified image / audio / video input.
- **Pricing (as of 2026-10-27):** Enterprise preview pricing not publicly disclosed; Foundry catalog lists pricing view.
- **Architecture:** Sparse MoE decoder-only Transformer, 35B active parameters per token, ~1T total parameters. Proprietary license.

### Raw benchmarks found

> Sources: Microsoft AI Introducing MAI-Thinking-1 2026-06-02, MAI-Thinking-1 technical report PDF 2026-06-03, BenchLM model page October 2026, LLM Stats model page.

Agent / tool use:
- Terminal-Bench 2.0: **46.0%** (BenchLM, Microsoft technical report)
- SWE-bench Pro: **52.8%** (Microsoft technical report)
- SWE-bench Verified: **73.5%** (BenchLM, Microsoft technical report)
- LiveCodeBench v6: **87.7%** (BenchLM, Microsoft technical report)
- Instruction following category rank: #4 / 153 models, 94.7/100 public category score (BenchLM)

Reasoning / knowledge:
- GPQA Diamond: **84.2%** (BenchLM, Microsoft technical report)
- AIME 2025: **97.0%** (Microsoft technical report)
- AIME 2026: **94.5%** (Microsoft technical report)
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:
- SWE-bench Pro: **52.8%** (Microsoft technical report)
- SWE-bench Verified: **73.5%** (BenchLM)
- LiveCodeBench v6: **87.7%** (BenchLM)
- Terminal-Bench 2.0: **46.0%** (BenchLM)

Long context:
- No MRCR / RULER / GraphWalks public score found; context extension to 256K reported in technical report Appendix C.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.0 46% and SWE-bench Pro 52.8% show solid agentic coding scaffolding; instruction following 94.7 category rank is strong but lack of independent Tau3 / Claw / Toolathon scores caps the rating.
- **Reasoning: 85/100.** GPQA Diamond 84.2%, AIME 2025 97.0% and AIME 2026 94.5% demonstrate strong STEM reasoning; no published HLE / Intelligence Index limits top tier.
- **Context window: 70/100.** Verified 256K token window per Microsoft Foundry and technical report; 256K tier maps to 70 per methodology, no public long-context retrieval benchmark.
- **Multimodal: 15/100.** Text in/out only per official card; no verified image / video input.
- **Coding: 75/100.** SWE-bench Verified 73.5% and LiveCodeBench v6 87.7% indicate capable coding; SWE-bench Pro 52.8% and Terminal-Bench 46% keep score below frontier 1M-context coders.
- **Cost efficiency: 60/100.** Enterprise preview with undisclosed pricing; sparse MoE design suggests moderate efficiency but no public per-token pricing.
- **Overall Score: 63/100.** Mean of five quality dims (70+85+70+15+75)/5 = 63.0. Best-fit: strong reasoning MoE with 256K context and solid agentic coding, text-only and enterprise-restricted.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
