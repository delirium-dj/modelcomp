# Big Pickle — findings by Muse Spark 1.3

- Source: OpenCode/Big Pickle (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6 consensus, stealth)
- **Short description:** Free stealth reasoning model on OpenCode Zen during its beta promo (community consensus: GLM-4.6 class), roughly Sonnet-class coding at zero token cost with Chat Completions-only access.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (Chat Completions only, NOT Responses API; tool calling supported; Codex CLI needs chat wire API).
- **Release / knowledge:** 2026 stealth promo (beta period); knowledge cutoff undisclosed; vendor has not disclosed weights and can swap the backing model without notice
- **IDs:** `opencode/big-pickle` (Free ID exists on Zen)
- **Context window:** 200K total (160K in / 32K out) — verified via curated repo metadata and community skill docs (vendor specs unverified in this research)
- **Modalities:** text in/out only; reasoning yes (thinking-mode reasoning_content round-trip); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-21):** Free $0/$0 Zen tier (limited-time stealth promo); paid equiv. GLM-4.6 ~$0.60/$2.20 per 1M
- **Architecture:** proprietary stealth (undisclosed; community consensus GLM-4.6 class, 357B MoE per ApX listing — proxy only)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Direct big-pickle runs are cited first; GLM-4.6 rows are labeled proxies under the community-consensus mapping.

Agent / tool use:

- SWE Atlas Codebase QnA: **50.8% (63/124)** (PhillipChaffee independent run, 2026-08-11, mini-swe-agent 2.4.6 + Harbor 0.18.0, official task data and judge; tops the mini-swe-agent scaffold class: GLM 5.2 48.12%, GPT-5.6-Sol 46.00%, GPT 5.5 45.43%; reduced 4-CPU/8-GB sandboxes, no resource-failure signal)
- Terminal-Bench 2.1: **no verified public direct score found** (closest proxy: GLM-4.6 TB2.1 49.4% per BenchmarkList)
- Tau3-Banking / Tau2-Bench: **no verified public direct score found** (closest proxy: GLM-4.6 Tau3 10.5%, Tau2 70.5–76.9% depending on harness)
- GDPval-AA: **no verified public direct score found** (closest proxy: GLM-4.6 GDPval 934)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public direct score found** (closest proxy: GLM-4.6 GPQA 63.2%–0.81 depending on harness/version)
- HLE: **no verified public direct score found** (closest proxy: GLM-4.6 HLE 5.5%)
- LCR / MLCR: **no verified public direct score found** (closest proxy: GLM-4.6 LCR 28.3%)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public direct score found** (closest proxy: BenchLM glm-4-6 overall 53.94 #107/411)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified public direct score found** (closest proxy: GLM-4.6 SWE-bench 0.68 / SWE Verified ~68.0% per ApX/Medium review)
- LiveCodeBench: **no verified public direct score found** (closest proxy: GLM-4.6 LiveCode 81.0–82.8%)
- SciCode / AA-SciCode: **no verified public direct score found** (closest proxy: GLM-4.6 SciCode 38.4%)
- Vibe Code Bench: **no verified public direct score found** (closest proxy: GLM-4.6 Vibe 3.1%)
- DeepSWE / Coding Index / other: **no verified public direct score found**
- By-language color (direct): TypeScript 58.1%, Python 55.2%, Go 50.0%, C 38.5% (same SWE Atlas run)

Long context:

- **no long-context retrieval reported** (no verified MRCR/RULER percentage found)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 72/100.** Direct SWE Atlas QnA 50.8% topping its scaffold class shows real agentic codebase ability; capped by the single-community-run provenance and zero TB/Tau/GDPval absolutes.
- **Reasoning: 68/100.** Codebase Q&A (onboarding 60.7%, architecture 52.3%) demands genuine reasoning with GLM-4.6-class proxy support; capped by zero direct GPQA/HLE/LCR absolutes.
- **Context window: 70/100.** 200K class (160K in / 32K out) maps to the 70 tier; capped well below 1M models.
- **Multimodal: 15/100.** Text-only per curated metadata; 15 is the text-only floor.
- **Coding: 72/100.** Direct 50.8% QnA plus GLM-4.6 proxies (LiveCode ~82%, SWE ~68%) support Sonnet-class-at-$0 positioning; capped by proxy-only coding-harness status.
- **Cost efficiency: 100/100.** $0 Free Zen tier during promo.
- **Overall Score: 59/100.** Mean of the five non-cost dims (72+68+70+15+72)/5 = 59.4; best-fit zero-cost daily driver — escalate after repeated failures or for 1M-context jobs.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: deeper public internet research superseding the 2026-09-18 excluded attempt (PhillipChaffee SWE Atlas eval repo + press coverage, OpenCode Zen docs, community skill/config docs, GLM-4.6 benchmark compilations as labeled proxies); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
