# GLM 5.2 Coding — findings by Mimo v2.6 Flash

- Source: Zhipu AI / Z.AI/`glm-5.2`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding (GLM-5.2)
- **Short description:** Z.AI/Zhipu open-weight coding-agent flagship (released 2026-06-13 API, weights 2026-06-16, MIT) — 753B/40B-active MoE with 1M context and IndexShare sparse attention; superseded on price/performance by GLM-5.3 (2026-08-18) at the **same** $1.40/$4.40 rates.
- **Provider / access:** Z.AI API `glm-5.2` (OpenAI-compatible); GLM Coding Plan; third parties (DeepInfra from ~$0.75/$2.40, Fireworks, Together, Novita, FriendliAI, OpenRouter). **No OpenCode Zen Free ID** (`noFreeId: true`). Self-host MIT weights on multi-GPU boxes.
- **Release / knowledge:** API 2026-06-13; open weights 2026-06-16 (HF); knowledge cutoff not restated in this pass (GLM-5.x line ~early 2026).
- **IDs:** `zai/glm-5.2` / `zhipuai/glm-5.2`; HF open-weight checkpoints.
- **Context window:** **1,000,000** in; **131,072** (or 128K on some hosts) max out. IndexShare claims ~2.9× lower per-token compute at full 1M vs naive attention.
- **Modalities:** text in; text out (**no vision**); thinking effort High/Max selectable; tool calls yes.
- **Pricing (as of 2026-09-22):** Z.AI **$1.40 in / $4.40 out per 1M**, cache read $0.26; DeepInfra from $0.75/$2.40. MIT open weights = free self-host. Note: GLM-5.3 now costs the same list price with higher scores — 5.2 is a legacy pick unless you need its exact snapshot.
- **Architecture:** MoE **~744–753B total / ~40B active**; MIT license; IndexShare sparse attention; same base family as 5.1→5.3 post-training lineage (5.3 reuses 5.2's base).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Primary: Z.AI launch table (2026-06) via Emergent/benchr/automatio; provider-reported unless noted.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2): **81.0%** (Z.AI; vs Opus 4.8 85.0, GPT-5.5 84.0, GLM-5.1 63.5)
- MCP-Atlas (Public): **76.8%** (Z.AI; trails Opus 4.8 77.8, beats GPT-5.5 75.3)
- Tool-Decathlon: **weaker than Opus 4.8 and GPT-5.5** (Emergent qualitative — exact % not extracted)
- AutomationBench / GDPval-AA / Tau3: no verified public score found for GLM-5.2 in this pass (5.3 has GDPval 1769)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Z.AI; trails Opus 4.8 93.6, GPT-5.5 93.6)
- AIME 2026: **99.2%** (Z.AI; beats Opus 4.8 95.7, GPT-5.5 98.3)
- HLE with tools: **54.7%** (Z.AI; trails Opus 4.8 57.9)
- Humanity's Last Exam text-only: **40.5%** (Z.AI)
- AA Intelligence Index for 5.2: no verified public score found in this pass (5.3: 60 at launch)

Coding:

- SWE-bench Pro: **62.1%** (Z.AI; up from GLM-5.1 58.4; beats GPT-5.5 58.6, trails Opus 4.8 69.2)
- FrontierSWE: **74.4** (Z.AI; trails Opus 4.8 75.1 by 0.7, beats GPT-5.5 72.6 — top open-weight claim at release)
- PostTrainBench: **34.3** (Z.AI; beats GPT-5.5 28.4, trails Opus 4.8 37.2)
- SWE-Marathon: **13.0%** (Z.AI; far behind Opus 4.8 26.0 — long-horizon weakness)
- LiveCodeBench: **65%** (automatio); BenchLM shows LiveCodeBench (Vals) 69.5, AA Coding Index 68.8
- NL2Repo: **48.9%** (BenchLM)

Long context:

- 1M window with IndexShare; MRCR / retrieval quality for 5.2: no verified public score found

Multimodal:

- **Text-only** — no image/video/audio (template: 15)

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 81.0 and MCP-Atlas 76.8 are solid production agentic scores near GPT-5.5; Tool-Decathlon qualitative weakness and missing GDPval/AutomationBench rows cap below 5.3's 90-class tool stack.
- **Reasoning: 86/100.** AIME 99.2, GPQA 91.2, HLE-tools 54.7 — excellent competition/science reasoning at open-weight prices; still a few points behind Opus 4.8/GPT-5.5 on GPQA/HLE.
- **Context window: 96/100.** True 1M / 131K-out window with IndexShare efficiency claims; no public MRCR curve for 5.2 (sticker strong, needle accuracy unverified here).
- **Multimodal: 15/100.** Text-only (template rule: 15).
- **Coding: 84/100.** SWE-Pro 62.1, FrontierSWE 74.4 (near Opus 4.8), PostTrainBench 34.3 beat GPT-5.5; SWE-Marathon 13.0 vs Opus 26.0 and missing SWE-Verified row are the clear caps — elite open coding, not closed-frontier long-horizon.
- **Cost efficiency: 88/100.** $1.40/$4.40 + $0.26 cache + MIT self-host undercuts Opus/GPT-5.5 by ~5–7× on output; held under 90 because **GLM-5.3 matches this price with higher scores** — pure economics favor 5.3 now.
- **Overall Score: 72/100.** Mean of five quality dims (78+86+96+15+84)/5 = 71.8 → 72. Best-fit: pin-able MIT snapshot for long-context text coding agents when you specifically need 5.2 behavior; for new work prefer GLM-5.3 (same price, better) or GLM-5.3-Flash (cheaper, multimodal).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (benchr GLM-5.2 review, Emergent benchmark explainer, automatio.ai, BenchLM, opper.ai, llm-stats, Z.AI docs citations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
