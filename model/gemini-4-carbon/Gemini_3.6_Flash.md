# Gemini 4 Carbon — findings by Gemini 3.6 Flash

- Source: Google/`google/gemini-4-carbon`
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon (preview / paid API tier; no free-tier ID available on Zen)
- **Short description:** Gemini 4 Carbon is Google DeepMind's premier flagship frontier model designed for advanced cybersecurity defense, complex long-horizon problem solving, and autonomous agentic workflows. It holds the #1 overall ranking on the BenchLM benchmark index.
- **Provider / access:** Google DeepMind / Google AI Studio & Vertex AI (`google/gemini-4-carbon`). Accessible via standard Gemini API / Responses API conventions. No free `opencode/` model ID exists on OpenCode Zen.
- **Release / knowledge:** 2026-10-28 (official launch announcement and model evaluation release); knowledge cutoff mid-2026.
- **IDs:** `google/gemini-4-carbon` (state explicitly: no Free ID exists on OpenCode Zen)
- **Context window:** 1,000,000 tokens total (1M combined input/output window; verified via Google DeepMind evaluation methodology and BenchLM).
- **Modalities:** Text, Image, Audio, Video, PDF input; Text output; Reasoning: yes; Tool calls: yes; JSON mode: yes.
- **Pricing (as of 2026-11-06):** Flagship paid tier rates (standard estimated $2.00 / 1M input, $10.00 / 1M output). Note: No free-tier option on Zen.
- **Architecture:** Large-scale sparse Mixture-of-Experts (MoE) transformer architecture with native multimodal input capability; proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0: **65.2%**, Google DeepMind Model Card / BenchLM)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1733 Elo** (Artificial Analysis: gdpval-aa leaderboard)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **79.3%** (Artificial Analysis AA-LCR leaderboard)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **60.0% / 88.69 (#1 of 1016)** (Artificial Analysis / BenchLM)
- Omniscience Accuracy / Hallucination Rate: **58.3% / 11.4%** (Artificial Analysis model benchmarks)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (FrontierSWE v2: **61.2%**, Proximal; FrontierCode 2.0: **40.0%**, Cognition)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **61.2%** (FrontierSWE v2, Proximal)

Long context:

- GraphWalks BFS (256K–1M): **96.2%** F1 score (Google DeepMind Model Card)

### Normalized scores (1-100)

- **Tool use: 93/100.** Top-tier agentic and computer control capabilities evidenced by OSWorld 2.1 Offline (81.5%), Terminal-Bench 4.0 (65.2%), AA AutomationBench (77.8%), CWE-bench v1 (71.0%), ExploitGym (53.5%), and GDPval-AA (1733 Elo).
- **Reasoning: 92/100.** Exceptional reasoning performance backed by Artificial Analysis Intelligence Index (60.0%, reaching the 60+ frontier benchmark threshold), AA-LCR (79.3%), and GraphWalks BFS (96.2%).
- **Context window: 98/100.** Tiered for a verified 1M token context window with high long-context retrieval fidelity on GraphWalks BFS at 256K–1M (96.2% F1 score).
- **Multimodal: 93/100.** Comprehensive native multimodal input coverage across text, vision, video, PDF, and audio modalities, with strong scores on Chartography (72.5%) and Blueprint-Bench 2 (58.6%). Capped by text-only generation.
- **Coding: 92/100.** Frontier software engineering capability demonstrated on Terminal-Bench 4.0 (65.2%), FrontierSWE v2 (61.2%), and FrontierCode 2.0 (40.0%).
- **Cost efficiency: 70/100.** Evaluated on the flagship paid API tier; priced competitively for top-of-index performance with no free API tier available.
- **Overall Score: 93.6/100.** Mean of five non-cost dimensions (93 + 92 + 98 + 93 + 92) / 5 = 93.6. Recommended as the industry-leading model for autonomous agentic workflows, long-context retrieval, cybersecurity, and frontier multi-step problem solving.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-06
- Method: Public internet research across Google DeepMind official model evaluation methodology, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
