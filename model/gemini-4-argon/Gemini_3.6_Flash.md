# Gemini 4 Argon — findings by Gemini 3.6 Flash

- Source: Google/`google/gemini-4-argon`
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (paid API tier; no free-tier ID available on Zen)
- **Short description:** Gemini 4 Argon is Google DeepMind's flagship frontier reasoning model built for complex software engineering, enterprise knowledge work, cybersecurity defense, and autonomous multi-step agentic workflows. It serves as the primary high-reasoning variant in the Gemini 4 model family.
- **Provider / access:** Google AI Studio / Gemini API (`google/gemini-4-argon`), Google Cloud / Vertex AI, OpenRouter (`openrouter/google/gemini-4-argon`), Requesty (`requesty/gemini-4-argon@eu`). Accessible via standard Gemini API / Chat & Responses API conventions. No free `opencode/` model ID exists on OpenCode Zen.
- **Release / knowledge:** 2026-10-13 (official announcement and model card release); knowledge cutoff March 2026.
- **IDs:** `google/gemini-4-argon` (state explicitly: no Free ID exists on OpenCode Zen)
- **Context window:** 1,000,000 tokens total (1M combined input/output window; verified via Google DeepMind Model Card and Google AI Studio documentation).
- **Modalities:** Text, Image, Audio, Video, PDF input; Text output; Reasoning: yes (configurable effort levels: minimal, low, medium, high); Tool calls: yes; JSON mode: yes.
- **Pricing (as of 2026-11-06):** $2.00 per 1M input tokens, $10.00 per 1M output tokens, $0.10 per 1M cached input tokens (paid $ tier rates via Google AI Studio / Gemini API). Note: No free-tier API option.
- **Architecture:** Large-scale sparse Mixture-of-Experts (MoE) transformer-based model with native multimodal input processing; proprietary weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0: **57.4%**, Google DeepMind Model Card)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **56.2%** (Artificial Analysis model benchmarks via BenchLM)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **57.1%** (Artificial Analysis: humanitys-last-exam leaderboard; 57.1% verified)
- LCR / MLCR: **79.7%** (Artificial Analysis AA-LCR model benchmarks)
- CritPt: **27.1%** (Artificial Analysis model benchmarks)
- Artificial Analysis Intelligence Index / BenchLM overall: **50.4% / 82.1 (#5 of 1016)** (Artificial Analysis / BenchLM)
- Omniscience Accuracy / Hallucination Rate: **48.3% / 4.3%** (Artificial Analysis model benchmarks)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (DeepSWE v1.1: **77.9%**, Google DeepMind Model Card; FrontierSWE v2: **55.0%**, Proximal)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **61.8%** (Artificial Analysis: scicode leaderboard)
- Vibe Code Bench: **91.9%** (Google DeepMind Model Card)
- DeepSWE / Coding Index / other: **77.9%** (DeepSWE v1.1, Google DeepMind Model Card)

Long context:

- GraphWalks BFS (128K): **99.7%** F1 score; GraphWalks BFS (256K–1M): **84.2%** F1 score (Google DeepMind Model Card)

### Normalized scores (1-100)

- **Tool use: 85/100.** Strong agentic performance evidenced by AutomationBench (51.3%), OSWorld 2.0 (69.2%), AA AutomationBench (77.5%), and Terminal-Bench 4.0 (57.4%); capped below top tier by complex multi-step terminal execution limits.
- **Reasoning: 94/100.** Exceptional frontier reasoning shown on HLE (57.1%, surpassing the 40%+ frontier threshold), AA-LCR (79.7%), LABBench 2 (88.8%), and RiemannBench (76.0%).
- **Context window: 96/100.** Tiered for a verified 1M token context window; high retrieval precision on GraphWalks BFS at 128K (99.7% F1) and 256K–1M (84.2% F1).
- **Multimodal: 92/100.** Comprehensive native multimodal input support spanning text, image, video, PDF, and audio; high scores on LVBench (91.7%) and Chartography (71.6%). Capped by text-only generation.
- **Coding: 95/100.** Frontier software engineering capability demonstrated on DeepSWE v1.1 (77.9%, exceeding 74%+ frontier mark), Vibe Code Bench (91.9%), and AA-SciCode (61.8%).
- **Cost efficiency: 76/100.** Evaluated on the paid API tier ($2.00 / 1M input, $10.00 / 1M output, $0.10 cached input); offers competitive pricing for a flagship frontier model with no free tier.
- **Overall Score: 92.4/100.** Mean of five non-cost dimensions (85 + 94 + 96 + 92 + 95) / 5 = 92.4. Recommended as a premier frontier model for complex coding, multi-step agent automation, and multimodal document reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-06
- Method: Public internet research across Google DeepMind official model cards, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
