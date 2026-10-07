# Xiaomi MiMo-V2.5-Pro — findings by DeepSeek 4.1 Flash

- Source: Xiaomi / MiMo-V2.5-Pro (`mimo-v2.5-pro` — requested as Free; no free ID found on OpenCode Zen)
- Date: 2026-10-06 (UTC)
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

- Tau3-Banking / Tau2-Bench (τ²-bench): **94.2%** (Artificial Analysis via BenchLM, 2026-10-06) — among the highest tool-agent reliability figures found in this scan
- τ³-bench: **72.9%** (Xiaomi via BenchLM, 2026-10-06)
- Terminal-Bench 2.0: **68.4%** (Xiaomi via BenchLM); Terminal-Bench 2.1 (Vals AI): **57.3%**
- Claw-Eval: **63.8%** (Claw-Eval leaderboard via BenchLM, 2026-10-06)
- GDPval-AA: **1,265** (Xiaomi) / **31.2%** normalized (Artificial Analysis via BenchLM)
- APEX-Agents-AA: **2.4%** (Artificial Analysis via BenchLM) — the weakest agentic signal found
- Gert Labs: **62.70%** (Gert Labs rankings via BenchLM)
- AA Agentic Index: **22.7%** (Artificial Analysis via BenchLM); an earlier Model Beat framing placed it at the **75th percentile** of tracked models
- Vendor claims: top-tier results on ClawEval, GDPval and SWE-bench Pro; autonomous completion of tasks with **1,000+ tool calls**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (Artificial Analysis via BenchLM); Vals AI prints **82.6%**
- HLE: **35.7%** (Artificial Analysis); with tools **48%**, without tools **34%** (Xiaomi via BenchLM)
- SciCode: **50.6%** (Artificial Analysis via BenchLM)
- MMLU-Pro: **84.6%** (Vals AI via BenchLM); SimpleQA: **no verified public score found**
- CritPt: **4.0%** (Artificial Analysis via BenchLM)
- AA-LCR: **79.7%** (Artificial Analysis via BenchLM) — long-context reasoning
- AA-IFBench: **79.9%** (Artificial Analysis via BenchLM)
- Artificial Analysis Intelligence Index: **26.0%**; Model Beat tracker composite **66.0** (Coding 63.0, Agentic 75.0 percentile framing); BenchLM overall **52.47/100, rank #83 of 887**
- AA-Omniscience: Index **3.3%**, Accuracy **22.4%**, Hallucination Rate **24.7%** (Artificial Analysis via BenchLM)
- MLCR: **no verified public score found**

Coding:

- SciCode: **50.6%** (Artificial Analysis); WebDev Arena: **1476 Elo** (Epoch AI via Model Beat); AA Coding Index: **60.2%** (Artificial Analysis via BenchLM)
- SWE-bench Pro: **57.2%** (Xiaomi via BenchLM) — the previously claimed top placement now has a number
- SWE-bench (Vals AI): **74.0%**; LiveCodeBench (Vals AI): **81.4%**
- Design Arena Website: **1273** (OpenRouter via BenchLM)
- Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- AA-LCR **79.7%** is the first published long-context reasoning value for the 1.05M window; no MRCR/RULER/GraphWalks recall-at-depth measurement was found.

### Normalized scores (1–100)

- **Tool use: 85/100.** τ²-bench 94.2%, τ³ 72.9%, Claw-Eval 63.8%, Terminal-Bench 2.0 68.4% and GDPval-AA 1265 make it a serious agent model; APEX-Agents 2.4% and a 22.7% AA agentic index show the ceiling, so it stays below the leaders.
- **Reasoning: 78/100.** GPQA Diamond 86.6%, MMLU-Pro 84.6% and AA-LCR 79.7% are strong, but HLE 35.7% and CritPt 4.0% put it mid-field.
- **Context window: 95/100.** 1,050,000 tokens with structured-output and tool-calling support; AA-LCR 79.7% is now published, but no 512K+ recall-at-depth measurement exists.
- **Multimodal: 15/100.** Text-in/text-out only — notably less capable than the cheaper, omnimodal non-Pro MiMo-V2.5.
- **Coding: 82/100.** SWE-bench Verified 74.0% (Vals), SWE-bench Pro 57.2%, LiveCodeBench 81.4%, SciCode 50.6% and a 1476 WebDev Arena Elo are solid; DeepSWE and Vibe Code Bench remain unmeasured, keeping it out of the 90s.
- **Cost efficiency: 88/100.** $0.43/$0.87 (or $0.30/$0.61 routed) is cheap for a 1M-context flagship with unrestricted open weights; no free tier and no Zen ID stop it short of the top.
- **Overall Score: 71/100.** (85 + 78 + 95 + 15 + 82) / 5 = 71.0 → **71**. Best fit: self-hosted or cheaply routed long-horizon agent workloads where a text-only 1M window is acceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: public internet research (Xiaomi model card, Vals AI and Artificial Analysis rows via BenchLM re-verified 2026-10-06, Epoch AI figures and OpenRouter specs via Model Beat, OpenRouter model page, OpenCode Zen docs for free-ID verification); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.