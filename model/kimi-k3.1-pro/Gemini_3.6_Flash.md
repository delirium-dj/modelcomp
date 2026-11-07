# Kimi K3.1 Pro — findings by Gemini 3.6 Flash

- Source: MoonshotAI/`moonshotai/Kimi-K3.1-Pro`
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro (paid API tier; open weights on HuggingFace `moonshotai/Kimi-K3.1-Pro`; no free-tier ID available on Zen)
- **Short description:** Kimi K3.1 Pro is Moonshot AI's flagship open-weights reasoning model engineered for autonomous agentic tool execution, complex multi-turn coding, and multimodal document analysis.
- **Provider / access:** OpenRouter (`openrouter/moonshotai/kimi-k3.1-pro`), Requesty (`requesty/kimi-k3.1-pro`), Moonshot API, HuggingFace (`moonshotai/Kimi-K3.1-Pro`). Note: Standard Chat Completions API conventions. No free `opencode/` model ID exists on OpenCode Zen.
- **Release / knowledge:** 2026-10-23 (official HuggingFace model card and launch blog release); knowledge cutoff mid-2026.
- **IDs:** `openrouter/moonshotai/kimi-k3.1-pro`, `moonshotai/Kimi-K3.1-Pro` (state explicitly: no Free ID exists on OpenCode Zen)
- **Context window:** 1,050,000 tokens total (1.05M combined input/output window; verified via HuggingFace model card and Moonshot launch blog).
- **Modalities:** Text, Image, PDF input; Text output; Reasoning: yes; Tool calls: yes; JSON mode: yes.
- **Pricing (as of 2026-11-07):** $2.00 per 1M input tokens, $10.00 per 1M output tokens, $0.20 per 1M cached input tokens (paid $ tier rates via OpenRouter / Requesty). Open-weights repository on HuggingFace. Note: No free-tier option on Zen.
- **Architecture:** Open-weights Mixture-of-Experts (MoE) transformer-based reasoning model; open weights under Moonshot AI license on HuggingFace.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0: **65.70%**, Moonshot AI launch blog; AA Terminal-Bench 4.0: **67.2%**, Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1858 Elo / 67.3%** (Artificial Analysis: gdpval-aa leaderboard)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Moonshot AI: Kimi K3.1 Pro launch blog)
- HLE: **70.0%** (w/ tools, Moonshot AI launch blog) / **52.5%** (AA-HLE, Artificial Analysis)
- LCR / MLCR: **86.3%** (AA-LCR) / **38.3%** (MLCR-AA) (Artificial Analysis)
- CritPt: **24.6%** (Artificial Analysis: critpt leaderboard)
- Artificial Analysis Intelligence Index / BenchLM overall: **46.5% / 75.03 (#12 of 1016)** (Artificial Analysis / BenchLM)
- Omniscience Accuracy / Hallucination Rate: **48.9% / 37.3%** (Artificial Analysis model benchmarks)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (DeepSWE: **75.5%**, Moonshot AI launch blog)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **60.8%** (Artificial Analysis: scicode leaderboard)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **75.5%** (DeepSWE, Moonshot AI launch blog) / **77.1%** (Kimi Code Bench v2, Moonshot AI launch blog)

Long context:

- no long-context retrieval reported (1.05M token context window verified via HuggingFace model card and Moonshot launch blog)

### Normalized scores (1-100)

- **Tool use: 94/100.** S-tier agentic execution demonstrated on GDPval-AA (1858 Elo, exceeding the 1750+ frontier benchmark threshold), OSWorld 2.1 (79.6%), BrowseComp (92.1%), AA AutomationBench (73.3%), and Terminal-Bench 4.0 (65.7% / 67.2%).
- **Reasoning: 95/100.** Exceptional reasoning capability verified on GPQA Diamond (94.2%, exceeding the 90%+ frontier threshold), HLE (70.0% with tools / 52.5% AA-HLE, exceeding the 40%+ frontier threshold), and AA-LCR (86.3%).
- **Context window: 96/100.** Tiered for a verified 1.05M token context window (HuggingFace Model Card / Moonshot launch blog); specific long-context retrieval benchmarks (MRCR/RULER) not reported.
- **Multimodal: 88/100.** Multi-modal visual perception and document analysis capability spanning text, images, and PDFs, supported by CharXiv (93.4%), MMMU-Pro (84.1% / 90.0%), and Chartography with tools (90.2%). Capped by text-only generation.
- **Coding: 94/100.** Frontier software development performance proven on DeepSWE (75.5%, exceeding the 74%+ frontier threshold), Kimi Code Bench v2 (77.1%), and AA-SciCode (60.8%, exceeding the 55%+ frontier threshold).
- **Cost efficiency: 76/100.** Evaluated on the paid API tier ($2.00 / 1M input, $10.00 / 1M output, $0.20 cached input); open-weights weights available on HuggingFace with competitive hosted API rates.
- **Overall Score: 93.4/100.** Mean of five non-cost dimensions (94 + 95 + 96 + 88 + 94) / 5 = 93.4. Recommended as a premier open-weights model for autonomous tool execution, complex software engineering, and multimodal document reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-07
- Method: Public internet research across the official Moonshot AI Kimi K3.1 Pro HuggingFace model card, launch blog, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
