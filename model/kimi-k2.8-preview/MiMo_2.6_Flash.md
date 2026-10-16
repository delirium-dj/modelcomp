# Kimi K2.8 Preview — findings by MiMo 2.6 Flash

- Source: Moonshot AI/kimi-k2.8-preview
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's (月之暗面) mid-tier coding/agentic model, fully rolled out in Kimi Code on 2026-09-11 as an in-place upgrade of the `kimi-for-coding` model ID (previously Kimi K2.7 Code). Positioned as "performance close to flagship K3 with more efficient thinking"; it also serves as the no-thinking fallback route for K3-series requests. Flag: closed weights, no published benchmark table, subscription-first access.
- **Provider / access:** Kimi Code API — OpenAI-compatible and Anthropic-compatible protocols: China `https://api.kimi.com/coding/v1`, overseas `https://api.kimi.ai/coding/v1` (Anthropic path `…/coding/`), model ID `kimi-for-coding` (Kimi Code Console API key; works in Claude Code/OpenCode/Codex). Chat Completions style. Also served inside Kimi app/Kimi Work subscriptions. Third-party gateway: ZenMux `moonshotai/kimi-k2.8-preview` (pay-as-you-go). **Not** on Moonshot Open Platform's per-token model list (no K2.8 pricing line as of 2026-10-10, HokAI check) and **not** on OpenRouter (404 checked 2026-10-16). No OpenCode Zen ID.
- **Release / knowledge:** 2026-09-11 (Kimi Code "What's New" model-release entry; ZenMux publish time 2026-09-14). Knowledge cutoff not published.
- **IDs:** runtime `kimi-for-coding` (Kimi Code); logical gateway ID `moonshotai/kimi-k2.8-preview` (ZenMux); no dedicated public API line on Moonshot's open platform.
- **Context window:** 1,048,576 tokens input (official Kimi Code model-configuration table); ZenMux reports 1.05M. Max output tokens not published. Long-context retrieval quality (MRCR/RULER): no verified public score found.
- **Modalities:** text, image, video in; text out; tool calls confirmed (HokAI: output text/tool-calls/code); reasoning effort `low` / `high` / `max` (default `max`), thinking can be disabled (then served by K2.8 no-thinking); JSON mode not confirmed for this checkpoint — no verified public score found.
- **Pricing (as of 2026-10-16):** primary access is Kimi membership quota (new plans: Plus and above; legacy plans: Andante and above — official Kimi Code docs), not per-token; after quota, optional Extra Usage balance billed in RMB. Third-party pay-as-you-go on ZenMux: **$1 / M input, $4 / M output, $0.25 / M cache read** (ZenMux model page, 2026-10-16). Chinese media (ai-bot.cn, AI CAKE) say the free Adagio tier also gets the 1M window — this **conflicts** with the official docs table (Plus and above), so treat free-tier access as unconfirmed. No OpenCode Zen Free ID.
- **Architecture:** proprietary; Moonshot has published no model card, parameter count, architecture write-up or weights (HokAI, 2026-10-10). Likely reuses K2.7 Code's MoE design (1T total / 32B active per token) since it replaced it on the same endpoint — explicitly an inference, not a confirmed spec. A Chinese SEO-style post (shshi.cn) claims "1.04T/32B, Apache 2.0 open weights, 256K context, ¥2/¥8 API" — **contradicted** by the official 1M context page, the closed-weights status, and the absence of any open-platform price line; treat as unreliable (reads like a K2.7 Code spec rehash).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / OSWorld / Toolathon / Claw-Eval: **no verified public score found** (Moonshot published no comparison table for K2.8, unlike the quantified K3 and K2.7 Code releases)
- Claimed gains (huidong.net Chinese news summary, 2026-09-13): five external benchmarks "all improved" vs K2.7 — SWE-Marathon **+20.0 pts**, Terminal-Bench 2.1 **+14.6 pts**, DeepSWE **+12.4 pts** — deltas only, no absolute values, no linked primary source → **unverified claim, not scored**. Same article says the checkpoint was produced by pure-RL post-training of K2.7 on ~1,700 self-built verifiable programming tasks (attributed to "Surge AI") — also unverified.

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index: **no verified public score found** (HokAI: no Artificial Analysis page exists; Model Index: "no third-party results yet"; Wen AGI: "No benchmark data available"). K3's 93.5% GPQA Diamond is a **K3** figure and must not be transferred.
- Independent harness sub-score: knowledge/reasoning **70/100** (ModelDial, kimi-for-coding eval 2026-09-11, `high` effort; also 70 at `max` effort).

Coding:

- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode absolute scores: **no verified public score found** (all tracker pages empty as of 2026-10-16; shshi.cn's 78.3 LCB v6 / 68.2 SWE-V / 61.5 TB2 rejected as contradicted/unreliable per model card).
- **ModelDial independent composite: 63.55/100** (rank **27/40** models) at `high` effort, evaluated 2026-09-11 on its own five-axis harness: backend engineering 54, frontend interaction 72, knowledge reasoning 70, visual aesthetics 57, maintainability 53; 70m58s, $0.66/task. `max` effort run only reports knowledge/reasoning 70 (53m24s, $0.59).
- Independent hands-on review (techgogogo.com, 2026-09-12, PI platform, thinking=max): mixed results — dashboard app approved, browser-OS build needed a rework and its flagship game errored, 3D racing game failed; reviewer verdict: "not as strong online hype suggests."
- Independent review (AI Quill / Meng Li, 2026-09-17): specs align with K3 (1,048,576 ctx, image+video, three effort tiers); in daily work the gap to K3 is hard to notice — qualitative, no numbers.

Long context:

- 1,048,576-token window documented officially; retrieval-at-window (MRCR/RULER): **no verified public score found**.

Multimodal:

- Image + video input supported (official); MMMU / Video-MME / CharXiv: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 65/100.** Agentic-coding positioning with official "agent capabilities improved across the board" plus working tool-call output, but zero verified Terminal-Bench/Tau/GDPval numbers and a mid-pack independent composite (27/40) cap it; missing tool benchmarks prevent a higher band.
- **Reasoning: 68/100.** Three-tier effort aligned with K3 and an independent knowledge/reasoning sub-score of 70/100 (ModelDial); no GPQA/HLE/index figure exists, so the score stays mid-band.
- **Context window: 95/100.** 1,048,576 tokens officially confirmed (≥1M tier = 95–100); not 100 because no ≥98%-retrieval-at-512K+ measurement has been published.
- **Multimodal: 80/100.** Text, image and video input (video lands it in the +video/PDF 75–90 band); text-only output and no published multimodal benchmark keep it below 90.
- **Coding: 68/100.** Official close-to-K3 claims and one measured independent composite (63.55/100, rank 27/40) with a negative hands-on review; no SWE-bench/LiveCodeBench/Terminal-Bench absolute is verifiable, which is the cap.
- **Cost efficiency: 88/100.** No official per-token line, but the ZenMux gateway route is a verified $1/$4 per M (≈ $1.25/$4.25 ≈ 88 reference band), plus subscription/Extra-Usage options; no $0 direct tier is confirmed for coding access.
- **Overall Score: 75/100.** Mean of the five quality dims (65+68+95+80+68)/5 = 75.2 → 75; best-fit: cheap long-context coding/agent daily driver for Kimi subscribers or ZenMux pay-as-you-go users who accept an unbenchmarked, unpinned checkpoint.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-16
- Method: public internet research (official Kimi Code docs: models + What's New; ZenMux, The Model Index, LLM Stats, HokAI, Wen AGI; independent tests ModelDial, techgogogo, AI Quill; Chinese news roundups for conflicting claims). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
