# Xiaomi MiMo-V2.5-Pro — findings by DeepSeek 4.1 Flash

- Source: Xiaomi / MiMo-V2.5-Pro (`mimo-v2.5-pro` — requested as Free; no free ID found on OpenCode Zen)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro (published as MiMo-V2.5-Pro)
- **Short description:** Xiaomi's flagship open-weights model, released 2026-04-23, aimed at general agentic capability, complex software engineering and long-horizon tasks. Xiaomi claims top rankings on ClawEval, GDPVal and SWE-bench Pro, and says it can autonomously complete professional tasks that would take experts days or weeks, involving more than a thousand tool calls.
- **Provider / access:** Xiaomi's own platform plus OpenRouter (six providers) and other hosts; open weights under an unrestricted license for self-hosting. **No Zen Free ID was found as of 2026-09-18**, so this file is scored on paid pricing.
- **Release / knowledge:** Released 2026-04-23. Knowledge cutoff not published.
- **IDs:** `mimo-v2.5-pro` (Xiaomi / OpenRouter). No OpenCode Zen Free ID. Non-Pro sibling: `xiaomi/mimo-v2.5`.
- **Context window:** 1,050,000 tokens (listed as 1.1M; tracker history shows a change from 1,048,576 to 1,050,000 on 2026-07-21). Max output not reproduced in the sources checked.
- **Modalities:** text in / text out only — no image, audio, video or PDF input, unlike the omnimodal non-Pro MiMo-V2.5. Tool calling yes; structured output via JSON schema yes.
- **Pricing (as of 2026-09-18):** $0.43 / 1M in and $0.87 / 1M out list, with OpenRouter routing as low as $0.3045 / $0.609 per 1M on a 1.1M-context listing. No free tier. Open weights allow self-hosting at infrastructure cost.
- **Architecture:** open-weights Mixture-of-Experts (unrestricted license). Xiaomi positions the V2.5 series as its production agent brain; the Pro tier is the flagship of that series.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau2-Bench (τ²-bench): **94.2%** (Epoch AI via Model Beat) — among the highest tool-agent reliability figures found in this scan
- Agentic index: **75th percentile** of tracked models (Epoch AI via Model Beat) — the model's strongest category
- Vendor claims: top-tier results on **ClawEval**, **GDPval** and **SWE-bench Pro**; autonomous completion of tasks with **1,000+ tool calls** (no numeric values published)
- Terminal-Bench 2.1 / 2.0: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (Epoch AI via Model Beat; also cited by an earlier third-party source)
- HLE: **35.7%** (improved from 33.8% in an August revision)
- SciCode: **50.6%** (Epoch AI via Model Beat)
- MMLU-Pro / SimpleQA / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: tracker composite of **66.0** with a Coding Index of 63.0 and Agentic Index of 75.0 (percentile framing)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- LCR / MLCR: **no verified public score found**

Coding:

- SciCode: **50.6%**; WebDev Arena: **1476 Elo** (Epoch AI via Model Beat)
- SWE-bench Pro: **claimed top ranking** by Xiaomi with no published number
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall value published for the 1.05M window; recall at depth is unmeasured in the sources checked.

### Normalized scores (1–100)

- **Tool use: 85/100.** τ²-bench 94.2%, a 75th-percentile agentic index and a credible 1,000+ tool-call autonomy claim make it a serious agent model; the missing Terminal-Bench and Claw/GDPval numbers (despite vendor claims) cap it below the leaders.
- **Reasoning: 78/100.** GPQA Diamond 86.6% is respectable, but HLE 35.7% and the absence of MMLU-Pro/CritPt figures put it mid-field.
- **Context window: 95/100.** 1,050,000 tokens with structured-output and tool-calling support; no recall-at-depth evidence.
- **Multimodal: 15/100.** Text-in/text-out only — notably less capable than the cheaper, omnimodal non-Pro MiMo-V2.5.
- **Coding: 80/100.** SciCode 50.6% and a 1476 WebDev Arena Elo are solid, and Xiaomi claims a top SWE-bench Pro placement, but no repository-level number is public.
- **Cost efficiency: 88/100.** $0.43/$0.87 (or $0.30/$0.61 routed) is cheap for a 1M-context flagship with unrestricted open weights; no free tier and no Zen ID stop it short of the top.
- **Overall Score: 74/100.** (85 + 78 + 95 + 15 + 80 + 88) / 6 = 73.5 → **74**. Best fit: self-hosted or cheaply routed long-horizon agent workloads where a text-only 1M window is acceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Epoch AI figures and OpenRouter specs via Model Beat, OpenRouter model page, Xiaomi capability claims via vendor descriptions, OpenCode Zen docs for free-ID verification); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.