# GLM 5.3 Free — findings by Mimo v2.6 Flash

- Source: Zhipu AI / Z.AI/`glm-5.3` (Free Zen tier)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free (free capped tier for Z.AI GLM-5.3)
- **Short description:** Zhipu/Z.AI's flagship coding-agent model (2026-08-14) — same ~750B MoE base as GLM-5.2 with scaled post-training only — free promotional tier on OpenCode Zen for agentic coding and tool calls; text-only, always-on thinking.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-free` (Chat Completions); Z.AI API `glm-5.3` (OpenAI-compatible + Anthropic-compatible coding endpoint); GLM Coding Plan (points quota, 50% off-peak); TokenRouter `z-ai/glm-5.3-free`.
- **Release / knowledge:** 2026-08-14 (Z.AI blog); knowledge cutoff **March 2026** (same pretrain as GLM-5.2). Open weights promised ~2 weeks post-launch (safety hold on cyber capability; not confirmed shipped in sources as of mid/late Aug coverage).
- **IDs:** `opencode/glm-5.3-free` (Zen free); `zai/glm-5.3` / `zhipuai/glm-5.3` paid.
- **Context window:** Full API **1,048,576** in / 131,072 out; **Zen free tier capped at 204K** (repo meta).
- **Modalities:** text in; text out (**no vision**); thinking always enabled (`low`/`high`/`max`, default max — `thinking.type: "disabled"` removed vs 5.2); tool calls yes; structured outputs yes.
- **Pricing (as of 2026-09-22):** Free Zen tier (primary entry); Z.AI list **$1.40 in / $4.40 out per 1M**, cache read $0.26; Coding Plan from ~$12.60/mo annual. AA measured ~$0.68 per Intelligence Index task (lowest in frontier cluster at launch).
- **Architecture:** MoE **~743–753B total / ~40B active** (same base as GLM-5.2); all gains post-training (Z.ai Code Bench +50% vs 5.2); text-only; emergent multi-stage cyber exploitation reasoning noted by Z.AI.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Primary source: Z.AI launch blog 2026-08-14 unless noted.

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Z.AI; vs Kimi K3 88.3, Opus 4.8 85.0, GPT-5.6 Sol 88.8)
- Terminal-Bench 3.0: **28.3%** (Z.AI; open-source SOTA at launch; vs GLM-5.2 4.6, Fable 5 33.7, Sol 34.6)
- Toolathlon-Verified: **73.0%** (Z.AI; vs K3 76.5, Opus 4.8 76.2)
- AutomationBench v1.0.6: **48.2%** (Z.AI; beats K3 46.7, Sol 45.8)
- Agents' Last Exam (ALE-CLI): **28.5** (Z.AI; open-SOTA claim; vs K3 27.6, Sol 28.6)
- GDPval-AA v2: **1769 Elo** (Z.AI/AA; beats K3 1682, Opus 4.8 1588, Sol 1730)
- HLE with tools: **62.5%** (Z.AI; trails Sol 64.5, Fable 63.9)
- Z.ai Code Bench (max effort): **34.5%** @ ~75K out tokens/task (Z.AI in-house; beats Opus 4.8 29.5 @ 120K; trails Fable 5 39.5)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (ModelBeat/Epoch AI tracking)
- Humanity's Last Exam (no tools): **42.3%** (ModelBeat/Epoch)
- Artificial Analysis Intelligence Index: **60** at launch (max effort; 1 behind Grok 4.6/Sol 61, 3 behind Opus 5 63) — later re-based v4.3 shows **45** (The AI Rankings, 2026-09-07)
- CritPt / FrontierMath / Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **66.9%** (Z.AI; vs GLM-5.2 46.2, K3 67.5, Opus 4.8 58.0, Sol 72.7)
- NL2Repo: **58.0%** (Z.AI; ties K3; trails Opus 4.8 69.7)
- SWE-Marathon v1.1: **42.5%** (Z.AI; beats Sol 42.5 tie, trails K3 48.1)
- FrontierSWE: **78.1** dominance (Z.AI/Proximal; trails Fable 5 88.2)
- SciCode: **56.5%** (ModelBeat/Epoch)
- CyberGym: **84.5%** (Z.AI; best in their comparison table vs Mythos 5 83.8, Sol 83.6)
- SWE-bench Verified / SWE-Pro: **no verified public score found for GLM-5.3** (Z.AI published none — noted gap vs GLM-5.2's 62.1% SWE-Pro)

Long context:

- 1M window on full API; Zen free **204K**; MRCR/RULER retrieval scores: no verified public score found

Multimodal:

- **Text-only** — no image/video/audio input (explicit Z.AI/model-card limitation)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 88.2, TB3.0 28.3 open-SOTA, GDPval-AA 1769 beats K3/Sol/Opus on that row, AutomationBench 48.2, ALE 28.5 — elite agentic tool stack; Toolathlon 73 slightly trails K3/Opus caps the very top.
- **Reasoning: 86/100.** GPQA 91.7, HLE 42.3 (tools 62.5), AA Intelligence Index 60 at launch (frontier cluster); re-based Index 45 and always-on thinking verbosity are the main drags.
- **Context window: 68/100.** Full API is true 1M, but this Free entry is Zen-capped at **204K** per meta — effective free window is mid-large; no public long-context retrieval curve.
- **Multimodal: 15/100.** Text-only product surface (template rule: 15).
- **Coding: 90/100.** DeepSWE 66.9, SWE-Marathon 42.5, FrontierSWE 78.1, CyberGym 84.5, Z.ai Code Bench 34.5 beats Opus 4.8 — top open-weights coding claim at launch; missing SWE-bench Verified/Pro rows for 5.3 specifically keep a sliver of uncertainty.
- **Cost efficiency: 100/100.** Free Zen tier with frontier-class coding agents; even paid $1.40/$4.40 undercuts Opus/Sol heavily — free-tier anchor = 100.
- **Overall Score: 70/100.** Mean of five quality dims (90+86+68+15+90)/5 = 69.8 → 70.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Z.AI GLM-5.3 blog, models.dev, ModelBeat, Benchgen, The AI Rankings, modelcompare.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
