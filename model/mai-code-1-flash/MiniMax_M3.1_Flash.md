# MAI-Code-1-Flash — findings by MiniMax M3.1 Flash

- Source: Microsoft AI (MAI-Code-1-Flash), `mai-code-1-flash`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft's June 2026 Copilot-native agentic coding model — only **5B active parameters**, 256K context, and a GitHub Copilot production-harness SWE-Bench Pro of **51.2%** against Claude Haiku 4.5's 35.2%, with "up to 60% fewer tokens" on hard problems. It is the predecessor of MAI-Code-1.1-Flash (October 2026), which costs a quarter as much and scores higher.
- **Provider / access:** GitHub Copilot (VS Code, model picker and "auto" picker), Microsoft Foundry and the MAI Playground, with distribution announced for OpenRouter, Fireworks and Baseten. models.dev lists **$0.75/M in, $4.50/M out**. **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-06-02** (Microsoft Build "hill-climbing machine" launch of seven MAI models; the dedicated post is dated 2026-06-02, updated 2026-06-08). Knowledge cutoff not published.
- **IDs:** `mai-code-1-flash` (Copilot / Foundry catalog), `microsoft/mai-code-1-flash` (models.dev).
- **Context window:** **256,000** tokens, **128,000** max output (models.dev).
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** **$0.75/M in, $4.50/M out** (models.dev; no Microsoft price card is published) — the successor MAI-Code-1.1-Flash is $0.20/$1.20, i.e. exactly a quarter.
- **Architecture:** proprietary, **5 billion active parameters**, trained from scratch on clean enterprise-grade data with no third-party distillation.

### Raw benchmarks found

> Microsoft's launch post publishes SWE-Bench Pro in prose but leaves the other three
> harness evals in chart images, so those absolute values cannot be cited. No
> Artificial Analysis or BenchLM page exists.

Coding:

- SWE-Bench Pro: **51.2%** vs **35.2%** for Claude Haiku 4.5 in the same GitHub Copilot production harness — verified in the launch post text
- Higher pass rate than Haiku 4.5 on **all four** Copilot evals (SWE-Bench Verified, SWE-Bench Pro, SWE-Bench Multilingual, **Terminal-Bench 2**) — absolute values are chart images only
- The folder's "SWE-bench Verified 71.6%" and "Terminal-Bench 2.1 51.7%" could not be verified: they exist only inside chart images, the launch post compares **Terminal-Bench 2** (not 2.1), and Terminal-Bench 2.1 appears only in the successor's post as a **relative +22%** gain
- Token efficiency: "**up to 60% fewer tokens**" on harder problems and on SWE-Bench Verified — verified in post text
- LiveCodeBench / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Agent / tool use:

- Instruction following: **+28.9 on IF Bench** and **+14.5 on Advanced IF** versus Haiku 4.5 (post text) · adversarial reasoning (186 questions, 34 categories): **85.8%** adjusted accuracy, with Einstellung traps still below 50%
- Production, VS Code from 2026-07-23: **~10% higher code accept rate** and **10% lower median token usage** vs GPT-5.4 Mini and Claude Haiku 4.5; developers **6% more likely to return** vs GPT-5.4 Mini and **11%** vs Haiku 4.5
- Terminal-Bench / Tau2 / Tau3 / GDPval-AA / OSWorld / AutomationBench / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / MMLU-Pro / AIME / FrontierMath / LCR: **no verified public score found** — the model publishes no general-reasoning table
- Artificial Analysis: **no page** (404) · BenchLM: **no page** (404)

Long context:

- No MRCR / RULER measurement published; 256K comes from the registry.

### Normalized scores (1–100)

- **Tool use: 45/100.** Instruction-following margins of +28.9 and +14.5 and 85.8% adversarial accuracy are real, but there is no Terminal-Bench, τ², GDPval or OSWorld number to place it on a standard scale.
- **Reasoning: 42/100.** No GPQA, HLE, MMLU-Pro or AIME figure was ever published for this model — the dimension is scored as unmeasured with a penalty.
- **Context window: 68/100.** 256,000 tokens with 128,000 max output is the 200K–500K tier, with no retrieval measurement.
- **Multimodal: 15/100.** Text-in/text-out only (vision arrives with the 1.1 successor).
- **Coding: 62/100.** SWE-Bench Pro 51.2% (vs Haiku 4.5's 35.2%) in a production harness, ~10% higher code-accept rate and 60% fewer tokens are strong signals, but the other three harness evals are unciteable chart images.
- **Cost efficiency: 88/100.** $0.75/M in and $4.50/M out is mid-market for a coding model — and the successor at $0.20/$1.20 makes this one hard to recommend.
- **Overall Score: 46/100.** Mean of the five quality dims = (45 + 42 + 68 + 15 + 62) / 5 = 46.4 → **46**. Best fit: in-editor VS Code coding where token efficiency and latency matter — prefer MAI-Code-1.1-Flash, which is a quarter of the cost and stronger on Terminal-Bench 2.1.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Microsoft AI launch posts and model pages, models.dev, BenchLM and Artificial Analysis absence checks, OpenRouter catalogue check); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MAI_Code_1_1_Flash.md`, using the same headings.
