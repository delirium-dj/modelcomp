# GLM 5.1 Coding — findings by GLM 5.3 Flash

- Source: Z.AI (`glm-5.1`, proprietary/paid on Zen; open-weights elsewhere)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1 (marketed on this repo's compare list as "GLM 5.1 Coding" — Z.AI's flagship long-horizon agentic model; no Zen Free ID exists)
- **Short description:** Z.AI's April 2026 flagship: a 754B-param sparse MoE (~40B active) built for 8-hour autonomous engineering loops — plan, execute, test, refine. SOTA SWE-Bench Pro 58.4 at release, beating Claude Opus 4.6 (57.3) and GPT-5.4 (57.7). Open weights (MIT) but no free API tier.
- **Provider / access:** Z.AI API (`glm-5.1`, `https://api.z.ai/api/paas/v4/`, Chat Completions-compatible); OpenCode Zen lists the paid `opencode/glm-5.1` (no `*-free` ID found). Open weights on Hugging Face (`zai-org/GLM-5.1`, MIT) — self-hostable. Multiple gateway routes (Alibaba, DeepInfra, Novita, TensorX, Nebius, Baidu, DigitalOcean).
- **Release / knowledge:** released 2026-04-07 (opper release tracker; 6 days after GLM-5V-Turbo). Knowledge cutoff not verified in this pass.
- **IDs:** `glm-5.1` (Z.AI) / `opencode/glm-5.1` (Zen, paid). **No Free ID** — scored on paid pricing.
- **Context window:** 200K–203K input (Z.AI docs: 200K; opper: 202,752) / 128K max output. Longest output cap measured in this repo.
- **Modalities:** text in / text out only. Thinking modes (multiple), streaming-during-tool-execution, function calling, context caching, structured output (JSON), MCP integration.
- **Pricing (as of 2026-09-18):** Z.AI route $1.40 in / $4.40 out per 1M (cache read $0.26); cheaper third-party routes exist (Alibaba $0.89/$3.58, DeepInfra $1.05/$3.50 — opper route table). No free tier; open weights are the cost escape hatch.
- **Architecture:** sparse MoE, 754B total / ~40B active (opper; HF card), MIT license, commercially usable.

### Raw benchmarks found

Agent / tool use:

- SWE-Bench Pro: **58.4%** — SOTA at release, ahead of Claude Opus 4.6 (57.3%) and GPT-5.4 (57.7%) (opper model page / Z.AI launch claims)
- Terminal-Bench Hard: **43%** (Artificial Analysis via opper)
- τ²-Bench Telecom: **98%** (Artificial Analysis via opper)
- Long-horizon: single-task autonomous loops up to **8 hours** (Z.AI docs positioning)
- Tau3 (70.6%) / TB2.0 (63.5%, 69.0 high-effort) also reported by Z.AI's launch table (repo source catalog)

Reasoning / knowledge:

- GPQA Diamond: **87%** (AA via opper)
- HLE: **30%** (AA via opper)
- IFBench: **76%**; long-context reasoning: **74%** (AA via opper)
- Artificial Analysis Intelligence Index: **26.4** (global rank #112/643) (AA via opper)

Coding:

- AA Coding Index: **55.8** (opper)
- SciCode: **45%** (AA via opper)
- Z.AI positioning: "overall aligned with Claude Opus 4.6" in coding, stronger on sustained agentic engineering (docs.z.ai)

Long context:

- Window: **200K–203K / 128K out**; AA long-context reasoning 74% (opper)

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 86/100.** τ² Telecom 98% (elite) + TB-Hard 43% (mid) + SWE-Pro SOTA and 8-hour loop design — a genuine long-horizon agent, slightly below the 2026 Gemini Flash agentic packages.
- **Reasoning: 80/100.** GPQA 87 / HLE 30 / IFBench 76 — Opus-4.6-class knowledge with an honest HLE cap.
- **Context window: 70/100.** 200K–203K at the repo's standard open-model tier with a class-leading 128K output; no 1M window.
- **Multimodal: 15/100.** Text-only in and out (Z.AI docs).
- **Coding: 88/100.** SWE-Pro 58.4 (release-SOTA), SciCode 45, AA Coding Index 55.8 — top open-weights coding package of its generation.
- **Cost efficiency: 75/100.** $1.40/$4.40 on the Z.AI route with no free ID; third-party routes at $0.89/$3.58 and MIT open weights are the mitigations.
- **Overall Score: 68/100.** Mean: (86 + 80 + 70 + 15 + 88 + 75) / 6 = 414/6 = 69.0 → **69**. Best fit: top paid open-weights coding/long-horizon pick — text-only and 200K-context are the trade for the SOTA agentic engineering.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (opper.ai GLM 5.1 model page with AA benchmark feed and route pricing table, Z.AI official docs `glm-5.1.md` for specs/capabilities); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
