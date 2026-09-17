# GLM 5.3 Free — findings by GLM 5.3 Flash

- Source: Z.AI (`glm-5.3`; OpenCode Zen promotional free tier `opencode/glm-5.3-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free (free Zen promotional tier of Z.AI's GLM-5.3 flagship; disclosed as fast agentic coding + tool calls)
- **Short description:** The strongest open-weights coding model of its generation (Z.AI's claim, backed by TB2.1 88.2 and DeepSWE 66.9), with a 1M context and security fine-tuning (CyberGym 84.5) — evaluated here on the $0 OpenCode Zen promotional tier.
- **Provider / access:** OpenCode Zen free promotional tier (`opencode/glm-5.3-free`, Chat Completions); Z.AI paid API (`glm-5.1`-style, `api.z.ai`); 14 gateway routes on opper; weights on Hugging Face under the GLM-5.3 license (not MIT like 5.2 — a ~2-week safety review delayed publication).
- **Release / knowledge:** announced 2026-08-14, released 2026-08-18 (opper release tracker). Knowledge cutoff not verified in this pass.
- **IDs:** `opencode/glm-5.3-free` (Zen free tier); `glm-5.3` (Z.AI paid). Paid list $1.40/$4.40.
- **Context window:** 1,000,000-token input, 128K max output (opper body; key-info table displays 131K).
- **Modalities:** text in / text out only. `reasoning_effort` parameter with low/high/max thinking budget; tools, structured output, caching.
- **Pricing (as of 2026-09-18):** **$0 on the evaluated OpenCode Zen promotional tier**; paid $1.40 in / $4.40 out per 1M on Z.ai (cache $0.26), cheap routes from $1.00/$3.41 (Morph) and $1.20/$4.00 (DeepInfra). Free tier may train on data per Zen's free-tier conventions — no confidential code.
- **Architecture:** sparse MoE, 744B total / ~40B active — same base as GLM-5.2 with a scaled-up post-training run; 52 tok/s, TTFT 2.95s (AA/opper).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Z.ai-reported; among the best published agentic-terminal results of 2026)
- Terminal-Bench 3.0: **28.3%** — vs 4.6% for GLM-5.2 (Z.ai launch table)
- DeepSWE v1.1: **66.9%** (Z.ai-reported)
- In-house Code Bench: **+50% over GLM-5.2** (Z.ai launch post)
- Tau2/Tau3/OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92%**; HLE: **42%**; long-context reasoning: **80%** (AA via opper)
- Artificial Analysis Intelligence Index: **44.9** (global rank #20/643) (AA via opper)

Coding:

- AA Coding Index: **74.8**; SciCode: **59%** (AA via opper)
- CyberGym (vulnerability discovery): **84.5**; Z.ai reports its models surfaced 2,436 vulnerabilities across 269 OSS projects since GLM-5.2 (launch post)
- "Most capable open-weights model for coding" (Z.ai positioning)

Long context:

- Window: **1M tokens** native with long-context reasoning 80% measured; MRCR/RULER at window length: no verified public score found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 95/100.** TB2.1 88.2 + TB3.0 28.3 + DeepSWE 66.9 — top-of-class open-weights agentic package, statistically tied with Muse Spark 1.3's terminal result.
- **Reasoning: 90/100.** GPQA 92 / HLE 42 / AA II 44.9 (rank #20/643) — flagship-class knowledge and reasoning.
- **Context window: 100/100.** Native 1M input with 80% measured long-context reasoning and a 128K output cap.
- **Multimodal: 15/100.** Text-only in and out.
- **Coding: 93/100.** AA Coding Index 74.8, SciCode 59, DeepSWE 66.9, CyberGym 84.5 — just under Muse Spark 1.3's package.
- **Cost efficiency: 100/100.** Evaluated on the $0 Zen promotional tier (paid $1.40/$4.40 and MIT-free self-host alternatives noted).
- **Overall Score: 82/100.** Mean: (95 + 90 + 100 + 15 + 93 + 100) / 6 = 493/6 = 82.2 → **82**. Best fit: the default free coding/agent flagship when multimodal isn't needed; the GLM-5.3 license (not MIT) is the main self-host caveat.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (opper.ai GLM-5.3 model page with AA benchmark feed and 14-route pricing table; Z.ai launch claims for TB3.0/DeepSWE/CyberGym and the GLM-5.3 license change); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
