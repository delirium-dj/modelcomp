# Kimi K3 — findings by Nemotron 3 Ultra 550B A55B

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (Max effort tier)
- **Short description:** Moonshot AI's flagship open-weights MoE model (2.8T total / 104B active params) with native multimodal input, 1M+ context, strong long-horizon coding and deep research capabilities, at premium API pricing.
- **Provider / access:** Kimi Platform (`kimi-k3` via `https://platform.kimi.com`), OpenCode Zen (`opencode/kimi-k3` via `https://opencode.ai/inference/openai/v1/chat/completions`), Hugging Face (`moonshotai/Kimi-K3`), 20 API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-07-16 release; knowledge cutoff not publicly disclosed.
- **IDs:** `moonshotai/Kimi-K3` (Hugging Face), `opencode/kimi-k3` (OpenCode Zen). Open weights available for self-hosting (Kimi K3 License, commercial use with restrictions).
- **Context window:** 1,050,000 tokens total (1.05M per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (chain-of-thought); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $3.00/M in, $0.30/M cache read (90% discount), $15.00/M out (Kimi Platform & OpenCode Zen). Blended 7:2:1 ≈ $2.31/M (AA). Cost per Intelligence Index task: $2.00 (AA).
- **Architecture:** MoE (Mixture of Experts), 2.8 trillion total parameters, 104 billion active parameters per token; open weights (Kimi K3 License).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot AI Kimi K3 launch blog) / **80.9%** (Vals AI) / **85%** (Artificial Analysis)
- BrowseComp: **91.2%** (Moonshot AI launch blog)
- DeepSearchQA: **95.0%** (Moonshot AI launch blog)
- Toolathlon Verified: **73.2%** (Moonshot AI launch blog)
- MCP Atlas: **84.2%** (Moonshot AI launch blog)
- AutomationBench: **30.8%** (Moonshot AI launch blog)
- JobBench: **52.9%** (Moonshot AI launch blog)
- APEX-Agents: **37.6%** (Moonshot AI launch blog) / **41.3%** (Artificial Analysis)
- SpreadsheetBench 2: **34.8%** (Moonshot AI launch blog)
- DECK-Bench: **73.5%** (Moonshot AI launch blog)
- GDPval-AA v2: **1533 Elo** (Artificial Analysis) / **51.6%** normalized (Artificial Analysis)
- AA Briefcase Elo: **1499** (Artificial Analysis)
- AA AutomationBench: **58.3%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **45.3%** (Artificial Analysis)
- AA Harvey LAB v1.0: **94.6%** (Artificial Analysis)
- AA Tau3 Banking: **46.0%** (Artificial Analysis)
- AA ITBench: **47.7%** (Artificial Analysis)
- AA Agentic Index: **50.6%** (Artificial Analysis)
- GDP.pdf: **22.0%** (Artificial Analysis)
- AA AnalystAgent: **38.8%** (Artificial Analysis)
- ApprenticeBench: **18%** (NeoCognition)
- Terminal-Bench 4.0: **12.6%** (Artificial Analysis)
- Hermes Index: **39.2%** / Hermes Bench: **71.5%** (Nous Research)
- MazeBench: **1%** (ASCII mode, tools)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot AI launch blog) / **92.9%** (Vals AI) / **93.5%** (Artificial Analysis)
- HLE: **56%** with tools / **43.5%** without tools (Moonshot AI launch blog)
- AA HLE: **46.9%** (Artificial Analysis)
- AA Intelligence Index: **44** (rank #5/121 open weights) (Artificial Analysis)
- AA LCR: **88.7%** (Artificial Analysis)
- CritPt: **23.4%** (Artificial Analysis)
- MLCR-AA: **38.3%** (Artificial Analysis)
- ARC-AGI-1: **94.50%** (ARC Prize semi-private)
- ARC-AGI-2: **60.4%** (ARC Prize semi-private)
- AA Omniscience Index: **19.7%** (Artificial Analysis)
- AA Omniscience Accuracy: **47.6%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **53.2%** (Artificial Analysis)
- MMLU-Pro (Vals): **88.0%** (Vals AI)
- Gray Swan IPI: **52.7%** (Google Gemini 4 Argon chart)

Coding:

- DeepSWE: **67.5%** (Moonshot AI launch blog)
- CursorBench 3.2: **60.8%** (Cursor evals)
- FrontierSWE: **81.2%** (Moonshot AI launch blog)
- ProgramBench: **77.8%** (Moonshot AI launch blog)
- Kimi Code Bench v2: **72.9%** (Moonshot AI launch blog)
- sweMarathon: **42%** (Moonshot AI launch blog)
- PostTrain Bench: **36.6%** (Moonshot AI launch blog)
- MLS-Bench Lite: **48.3%** (Moonshot AI launch blog)
- AA-SciCode: **59.5%** (Artificial Analysis)
- VulcanBench v3: **73.7%** (VulcanBench report)
- OpenHarmony Bench: **57.3%** (OpenHarmony Bench leaderboard)
- FrontierSWE v2: **25.9%** (Proximal leaderboard)
- LiveCodeBench (Vals): **87.2%** (Vals AI leaderboard)
- SWE-bench (Vals): **93.4%** (Vals AI leaderboard)
- AA Coding Index: **76.2%** (Artificial Analysis)
- PostTrainBench v1.1: **32.0%** (PostTrainBench leaderboard)
- Bug Hunt Bench: **21.0 fixes** (public data)

Multimodal:

- MMMU-Pro: **81.6%** (Moonshot AI launch blog) / **80.5%** (Artificial Analysis) / **83.4%** with Python
- CharXiv: **84.8%** no tools / **91.3%** with tools (Moonshot AI launch blog)
- MathVision: **94.3%** / **97.8%** with Python (Moonshot AI launch blog)
- BabyVision with Python: **85.7%** (Moonshot AI launch blog)
- ZeroBench: **23.0%** / **41.0%** with Python (Moonshot AI launch blog)
- WorldVQA ForceAnswer: **51.0%** (Moonshot AI launch blog)
- OmniDocBench: **91.1%** (Moonshot AI launch blog)
- PerceptionBench: **58.5%** (Moonshot AI launch blog)
- OfficeQA Pro: **63.3%** (Moonshot AI launch blog)
- Design Arena Website: **1336** (OpenRouter)

Long context:

- AA LCR: **88.7%** (Artificial Analysis)
- MLCR-AA: **38.3%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 78/100.** TB 2.1 88.3% (near 88%+ frontier), BrowseComp 91.2%, DeepSearchQA 95.0%, MCP Atlas 84.2%, Toolathlon 73.2%, GDPval 1533 Elo (below 1750+ frontier), AA Agentic Index 50.6%, APEX-Agents 37.6%. Capped by TB 4.0 12.6%, AutomationBench 30.8%, MazeBench 1%.
- **Reasoning: 78/100.** GPQA Diamond 93.5% (exceeds 90%+ frontier), HLE 56% with tools (exceeds 40%+ frontier), ARC-AGI-1 94.5% / ARC-AGI-2 60.4%, AA LCR 88.7%, Gray Swan IPI 52.7%. Capped by AA Intelligence Index 44 (<60 frontier), CritPt 23.4%, MLCR 38.3%, AA Omniscience Index 19.7%.
- **Context window: 95/100.** 1.05M native context; AA LCR 88.7% — no public MRCR ≥98% at 512K+ found for 100 tier. Methodology: ≥1M = 95–100.
- **Multimodal: 70/100.** Text + image input only; MMMU-Pro 81.6%, CharXiv 91.3% with tools, MathVision 97.8% with Python, OmniDocBench 91.1%. No video, audio, PDF input reported. Methodology: +image in = 60–70.
- **Coding: 85/100.** SWE-bench 93.4% (Vals, exceeds 80%+ frontier), LiveCodeBench 87.2% (Vals), VulcanBench 73.7%, DeepSWE 67.5% (near 74%+ frontier), AA Coding Index 76.2% (exceeds 70%+), AA-SciCode 59.5% (exceeds 55%+), ProgramBench 77.8%, Kimi Code Bench 72.9%. Capped by DeepSWE 67.5%, FrontierSWE v2 25.9%.
- **Cost efficiency: 55/100.** $3/$15 per 1M, blended ~$2.31/M, 90% cache discount, cost/task $2.00. Methodology: $3/$15 ≈ 60, $10/$50 ≈ 30 → $3/$15 interpolates to ~55 for open weights premium pricing.
- **Overall Score: 81/100.** Half-up mean of (78 + 78 + 95 + 70 + 85) / 5 = 81.2 → 81. Best-fit: strongest open-weights MoE for long-horizon coding and multimodal reasoning; 2.8T/104B MoE architecture enables self-hosting; API pricing premium vs proprietary peers.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Moonshot AI Kimi K3 blog, Kimi.com), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.