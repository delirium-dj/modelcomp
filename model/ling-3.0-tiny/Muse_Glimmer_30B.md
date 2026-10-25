# Ling 3.0 Tiny — findings by Muse Glimmer 30B

- Source: InclusionAI / Ling-3.0-tiny
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** Lightweight hybrid reasoning MoE from InclusionAI/Ant Group for edge/local deployment. 7.9B total / 1.3B active parameters with switchable Thinking/Instant modes, native tool calling and prompt caching. Variant of the Ling-3.0 family, distinct from API-only Ling-3.0-flash.
- **Provider / access:** Open weights Hugging Face `inclusionAI/Ling-3.0-tiny`; API via OpenRouter `inclusionai/ling-3.0-tiny:free` and community providers. Chat Completions API.
- **Release / knowledge:** 2026-08-06 release; knowledge cutoff not publicly disclosed.
- **IDs:** `inclusionAI/Ling-3.0-tiny`
- **Context window:** 256K native, 262K reported by Artificial Analysis/BenchSift. Verified by Ant Ling docs and Artificial Analysis model page.
- **Modalities:** Input text; Output text. Reasoning yes, tool calls yes, JSON mode supported. No image/audio/video.
- **Pricing (as of 2026-10-25):** $0.00 per 1M input / $0.00 per 1M output via community API providers; open weights MIT license for self-host. Free tier usage caveats apply per provider.
- **Architecture:** 7.9B total parameters MoE, 1.3B activated per token. 128 routed experts, 8 routed +1 shared active per token. 3:1 KDA-MLA alternating stack. Open weights, MIT license.

### Raw benchmarks found

> Sources: Hugging Face model card inclusionAI/Ling-3.0-tiny 2026-08-06, Artificial Analysis model page ling-3-0-tiny, Ant Ling developer docs, BenchSift aggregation of Artificial Analysis data.

Agent / tool use:

- Terminal-Bench 2.1: **27.7%** (BenchSift/Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **20.8%** τ-Bench Banking (BenchSift/Artificial Analysis)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **73.4%** (BenchSift/Artificial Analysis)
- HLE: **9.3%** (BenchSift/Artificial Analysis)
- LCR / MLCR: **AA-LCR v1.1 60.3%** (BenchSift/Artificial Analysis)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **11.1** Artificial Analysis Intelligence Index v4.3.2 (BenchSift). Hugging Face model card claims **25** on Artificial Analysis Intelligence Index v4.1.1 and **16** on Artificial Analysis Agentic Index — version and methodology conflict noted.
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **24.2%** (BenchSift/Artificial Analysis)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **Coding Index 26.5** (BenchSift)

Long context:

- AA-LCR v1.1 60.3% at 262K window reported by BenchSift/Artificial Analysis; no RULER / GraphWalks public score found

### Normalized scores (1–100)

- **Tool use: 35/100.** Terminal-Bench 2.1 27.7% and τ-Bench Banking 20.8% show limited agentic tool use for a 1.3B active model. Capped by absence of independent Claw/Toolathon scores and low BenchSift Agentic Index 4.4.
- **Reasoning: 55/100.** GPQA Diamond 73.4% is strong for size, but HLE 9.3% and Artificial Analysis Intelligence Index 11.1 limit overall reasoning. Conflict with Hugging Face claimed Index 25 on v4.1.1 is noted but lower v4.3.2 figure used.
- **Context window: 72/100.** 256K-262K native context verified. No public RULER/GraphWalks retrieval scores. Tier mapping caps below 1M models.
- **Multimodal: 15/100.** Text-only input/output, no image/audio/video support.
- **Coding: 45/100.** SciCode 24.2% and Coding Index 26.5 indicate modest coding capability. No verified SWE-bench/LiveCodeBench scores caps the score.
- **Cost efficiency: 100/100.** $0 per 1M input/output via community providers and MIT open weights. Free self-host.
- **Overall Score: 44/100.** Mean of five quality dims (35+55+72+15+45)/5 = 44.4 → 44. Best-fit: efficient edge reasoning/text model with strong cost profile but limited tool/coding breadth.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.

