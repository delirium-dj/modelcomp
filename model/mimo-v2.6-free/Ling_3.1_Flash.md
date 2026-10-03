# MiMo V2.6 Free — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / MiMo V2.6 Free
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free (zero-cost OpenCode Zen tier of Xiaomi's MiMo-V2.6-Flash)
- **Short description:** Free hosted tier of Xiaomi's MiMo V2.6 Flash — a full-modality open-weights reasoning model (MIT license) in the MiMo V2.6 series (Pro / Flash / Distill-Qwen-9B); capabilities identical to MiMo V2.6 Flash.
- **Provider / access:** Xiaomi — OpenCode Zen free tier (`opencode/mimo-v2-6-free`); Xiaomi API (prepaid, balance-based, monthly/annual plans); open weights on Hugging Face (MIT). Rate limits on the free tier (Flash specs: RPM 100, TPM 10M).
- **Release / knowledge:** MiMo V2.6 series released September 2026 (RL training: 30 steps each for Flash and Pro, ~750K trajectories total, ~$850K Flash / $2.62M Pro compute). Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/mimo-v2-6-free` (repo meta.json, stale stub: "128K total", "Text in/out" — actual: 1M, full-modality).
- **Context window:** 1M tokens; 128K max output (Flash specs).
- **Modalities:** Native fully multimodal — text, image, audio, video, PDF in; text out (per reseller catalog and "full-modality" series positioning).
- **Pricing (as of 2026-10):** Free on OpenCode Zen; Xiaomi API list $0.28/1M input for Flash (output price not captured in sources).
- **Architecture:** MiMo V2.6 Flash — open weights (MIT); Flash parameter count not captured (Pro is the flagship; Distill-Qwen-9B is the 9B sibling).

### Raw benchmarks found

Xiaomi's model card / OpenLM evaluation table (Flash column; vendor-reported):

Agent / tool use:

- Toolathlon-Verified: **73.6%**.
- AutomationBench v1.0.6: **52.3%**.
- Agents' Last Exam: **27.6%**.
- OSWorld-Verified: **80.8%**; JobBench: **61.2%**.
- Terminal-Bench 2.1 / Tau3-Banking / MCP-Atlas: no verified public score found for Flash.

Reasoning / knowledge:

- No GPQA / HLE / AA Intelligence Index score captured for Flash. (Pro scores 46 on AA Intelligence Index v4.3.2 — first among 115 open-weight models, level with Grok 4.7 xhigh — suggesting Flash sits at or below that tier.)

Coding:

- DeepSWE v1.1: **67.9%** (release post says 65.7 — internal inconsistency in Xiaomi's materials).
- Terminal-Bench 2.1: **87.6%**; Terminal-Bench 4.0: **28.8%**.
- MiMo Code Bench: **61.2%**; ProgramBench: **26.0%**.
- LiveCodeBench / SciCode: no verified public score found for Flash.

Cybersecurity:

- CyberGym: **95.1%**; MiMo Cyber Bench: **77.2%**; ExploitGym: **6.0%**; ExploitBench: **25.3%**; SEC Bench Pro: **47.5%**.

Visual agent:

- MiMo VisualCoding: **71.5%**.

Long context: no MRCR/RULER/GraphWalks score found; 1M window.

### Normalized scores (1–100)

- **Tool use: 71/100.** Toolathlon-Verified 73.6% and OSWorld 80.8% are above the mid band, but AutomationBench 52.3% and Agents' Last Exam 27.6 lag; no TB2.1/MCP-Atlas evidence.
- **Reasoning: 65/100.** No GPQA/HLE/AA-Index captured for Flash; Pro's AA Index 46 (top open-weight) suggests Flash at or below that tier — scored conservatively pending direct evidence.
- **Context window: 95/100.** 1M tokens confirmed in Flash specs.
- **Multimodal: 88/100.** Native text/image/audio/video/PDF input (full-modality band); MiMo VisualCoding 71.5% is the only visual score captured.
- **Coding: 71/100.** Terminal-Bench 2.1 87.6% is strong and DeepSWE v1.1 67.9% is solid, but Terminal-Bench 4.0 28.8%, ProgramBench 26.0% and the absence of LiveCodeBench cap it.
- **Cost efficiency: 98/100.** Free on OpenCode Zen; Xiaomi API list $0.28/1M input.
- **Overall Score: 78.0/100.** Mean of the five quality dimensions; the free tier of a strong full-modality open model — frontier-adjacent terminal coding and cybersecurity, weak on the newest hard benchmarks (TB 4.0, ALE, ProgramBench).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
