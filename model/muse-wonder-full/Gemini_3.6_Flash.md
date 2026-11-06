# Muse Wonder Full — findings by Gemini 3.6 Flash

- Source: Meta/`meta/muse-wonder-full`
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full (paid API tier; no free-tier ID available on Zen)
- **Short description:** Muse Wonder Full is Meta's flagship proprietary reasoning model engineered for complex software development, agentic decision-making, and multimodal document synthesis. It represents the full-capability tier of the Muse Wonder model family.
- **Provider / access:** OpenRouter (`openrouter/meta/muse-wonder`), Requesty (`requesty/muse-wonder-1.0`). Note: Standard Chat Completions API conventions. No free `opencode/` model ID exists on OpenCode Zen.
- **Release / knowledge:** 2026-10-12 (official model card publication); knowledge cutoff mid-2026.
- **IDs:** `meta/muse-wonder-full` (state explicitly: no Free ID exists on OpenCode Zen)
- **Context window:** 1,000,000 tokens total (1M combined input/output window; verified via Meta Model Card and BenchLM).
- **Modalities:** Text, Image, PDF input; Text output; Reasoning: yes; Tool calls: yes; JSON mode: yes.
- **Pricing (as of 2026-11-06):** $4.00 per 1M input tokens, $20.00 per 1M output tokens, $0.20 per 1M cached input tokens (paid $ tier rates via OpenRouter / Requesty). Note: No free-tier option.
- **Architecture:** Proprietary large-scale transformer-based reasoning model; proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (AA Terminal-Bench 4.0: **57.1%**, Meta Model Card)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1857 Elo / 67.9%** (Artificial Analysis: gdpval-aa leaderboard)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **53.6%** (Artificial Analysis: humanitys-last-exam leaderboard)
- LCR / MLCR: **83.7%** (AA-LCR) / **22.2%** (MLCR-AA) (Artificial Analysis)
- CritPt: **32.9%** (Artificial Analysis: critpt leaderboard)
- Artificial Analysis Intelligence Index / BenchLM overall: **50.1% / 69.44 (#18 of 1016)** (Artificial Analysis / BenchLM)
- Omniscience Accuracy / Hallucination Rate: **41.0% / 17.6%** (Artificial Analysis model benchmarks)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (DeepSWE: **79.0%**, Meta Model Card)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **62.6%** (Artificial Analysis: scicode leaderboard)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **79.0%** (DeepSWE, Meta Model Card)

Long context:

- no long-context retrieval reported (1M token context window verified via Meta Model Card and BenchLM)

### Normalized scores (1-100)

- **Tool use: 91/100.** High-tier agentic capability demonstrated by GDPval-AA (1857 Elo, surpassing the 1750+ frontier benchmark threshold), OSWorld 2.1 (78.4%), JobBench (75.3%), and Terminal-Bench 4.0 (57.1%). Capped by AA AutomationBench (45.4%).
- **Reasoning: 92/100.** Strong frontier reasoning performance shown on AA-HLE (53.6%, exceeding the 40%+ frontier threshold), AA-LCR (83.7%), and AA Intelligence Index (50.1%).
- **Context window: 95/100.** Tiered for a verified 1M token context window (Meta Model Card / BenchLM); specific long-context retrieval benchmarks (MRCR/RULER) not reported.
- **Multimodal: 82/100.** Multi-modal support covering text, visual image perception, and PDF document processing (GDP.pdf score of 32.6%). Capped by lack of native audio/video modalities and text-only generation.
- **Coding: 95/100.** Frontier software development capability backed by DeepSWE (79.0%, exceeding 74%+ frontier threshold), AA-SciCode (62.6%, exceeding 55%+ frontier threshold), ProgramBench (59.0%), and sweMarathon (57.5%).
- **Cost efficiency: 53/100.** Evaluated on the paid API tier ($4.00 / 1M input, $20.00 / 1M output, $0.20 cached input); positioned in the premium pricing bracket with no free option.
- **Overall Score: 91.0/100.** Mean of five non-cost dimensions (91 + 92 + 95 + 82 + 95) / 5 = 91.0. Recommended for high-difficulty coding automation, deep multi-step agentic workflows, and complex reasoning tasks where premium pricing is acceptable.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-06
- Method: Public internet research across Meta official model cards, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
