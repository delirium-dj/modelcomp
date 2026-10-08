# Qwen3.6-Plus — findings by MiMo 2.6 Flash

- Source: Alibaba Cloud / Qwen Team (`qwen/qwen3.6-plus`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6-Plus — Alibaba's April-2026 hosted flagship, tilted to general reasoning and world knowledge (the sibling Qwen3.6-Max-Preview is the coding/agent flagship; Qwen3.6-Flash is the speed tier).
- **Short description:** A proprietary, always-on-reasoning agentic model with a native 1M context, marketed "towards real-world agents": 78.8% SWE-bench Verified (vendor) with strong terminal/tooling work, video-capable multimodal input, at roughly a twelfth of Claude Opus 4.6's price during launch coverage. Community reviews call the mandatory reasoning a "reasoning tax" and note it ships with no weights.
- **Provider / access:** Qwen/Alibaba API (Model Studio / DashScope), OpenRouter `qwen/qwen3.6-plus` (benchmarks page verified), third-party routers; **no open weights** (proprietary). No Free ID on OpenCode Zen (`noFreeId: true`); a free preview window on OpenRouter existed at launch (now over).
- **Release / knowledge:** released **2026-04-02** (Qwen3.6 launch post "Qwen3.6-Plus: Towards Real World Agents"; llm-stats catalog shows 2026-03-31 — launch-week discrepancy noted); knowledge cutoff not disclosed → not scored.
- **IDs:** `qwen/qwen3.6-plus` (OpenRouter); native Qwen API model ID `qwen3.6-plus`.
- **Context window:** **1,000,000 tokens** native; up to **65,536** output tokens.
- **Modalities:** text, image, video in (VideoMMMU row confirms video); text out; reasoning **always on** (no off switch reported — the "mandatory reasoning tax"); tool calls yes (function calling / MCP via Qwen agent stack).
- **Pricing (as of 2026-10-07):** **$0.50 in / $3.00 out** per 1M for input ≤ 256K (cached input $0.05); **$2.00 / $6.00** for 256K–1M input (repo metadata tiers); OpenRouter **$0.325/$1.95**; llm-stats has seen $0.50/$3.00 with $0.05 cache; tokenmix cited $0.28/$1.66 at launch-route pricing. Paid.
- **Architecture:** proprietary; parameter count not published.

### Raw benchmarks found

> Vendor rows = Qwen's 2026-04-02 launch post (qwen.ai/blog?id=qwen3.6) unless
> marked; independent rows from AA, Vals AI, Claw-Eval leaderboard, Epoch, OpenRouter.

Agent / tool use:

- τ²-bench: **97.7%** (AA-run — near-perfect). τ³-bench: **70.7%** (Qwen).
- MCP-Tasks: **74.1%**; WideResearch: **74.3%** (Qwen). MCP Atlas: 48.2% (Qwen) — mid.
- Claw-Eval: **58.8%** (Claw-Eval leaderboard, independent); QwenClawBench: 57.2%.
- Terminal-Bench 2.0: **61.6%** (Qwen); Terminal-Bench 2.1: **53.2%** (Vals AI) — both well under frontier refs.
- Toolathlon: **39.8%** (Qwen — weak); VITA-Bench 44.3%; DeepPlanning 41.5%.
- GDPval-AA: **1066 Elo** (normalized 24.7%) (AA — weak); Gert Labs 50.6%; ResearchClawBench 18.0%.
- OSWorld / MCP-Atlas-row-for-computer-use: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Qwen) — clears the 90+ ref on the vendor run; AA: 88.2%, Vals: 87.4% (both just under).
- HLE: **28.8%** (Qwen) / **27.8%** (AA) — far under the 40% ref.
- Artificial Analysis Intelligence Index: **27.0** (AA current scale — far under 60+); AA-Omniscience: accuracy 26.4%, hallucination rate 34.6%, index **0.9** (AA — very weak).
- MMLU-Pro: 88.5% (Vals 87.7); MMLU-Redux 94.5%; SuperGPQA 71.6%; C-Eval 93.3%; IFEval 94.3%; IFBench 75.8% (AA 75.2%) (Qwen/AA).
- AIME 2026: **95.3%**; HMMT Feb-2025 96.7% / Nov-2025 94.6% / Feb-2026 87.8% (Qwen); FrontierMath v2: 26.2% (Tiers 1–3), 8.3% (Tier 4) (Epoch, independent).
- CritPt: **2.9%** (AA — negligible).

Coding:

- SWE-bench Verified: **78.8%** (Qwen — clears the 74% frontier ref); Vals AI independent: **73.4%** (just under ref).
- SWE-bench Pro: **56.6%**; SWE Multilingual: **73.8%** (Qwen).
- LiveCodeBench v6: **87.1%** (Vals: 86.0% — independent agreement).
- AA Coding Index: **54.5%** (AA — mid, under the 70+ tier); Vibe Code Bench v1.1: 25.6% (Vals — weak).

Multimodal (vendor, launch multimodal table):

- MMMU **86.0**, MMMU-Pro **78.8** (AA run: 78.0), MathVision **88.0**, VideoMMMU **84.0** (video in confirmed), CharXiv **81.5**, V* **96.9**, ScreenSpot Pro **68.2**; Design Arena Website: 1247 (OpenRouter).

Long context:

- **AI-Needle: 68.3%** at 1M (Qwen — a real retrieval row, but modest); LongBench v2: **62%** (Qwen); AA-LCR: **78.3%** (AA).

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-bench 97.7 (AA), MCP-Tasks 74.1, WideResearch 74.3 and τ³ 70.7 are genuinely strong agentic rows; capped at 82 by the weak hard-agent profile — TB2.1 53.2 (Vals), TB2.0 61.6, Toolathlon 39.8, MCP Atlas 48.2, GDPval 1066 Elo, and no OSWorld row.
- **Reasoning: 78/100.** GPQA 90.4 (vendor) clears the top ref, MMLU-Pro 88.5 and AIME 95.3 are strong, IFBench/IFEval excellent; dragged down hard by HLE 28.8, the AA Index of 27, Omniscience index 0.9, and CritPt 2.9 — the AA basket reads like a mid-tier model.
- **Context window: 95/100.** 1M native = ≥1M tier floor, with actual retrieval evidence (AI-Needle 68.3, LongBench v2 62) — real but far from the ≥98%-at-512K+ level needed to rise above the floor.
- **Multimodal: 85/100.** Text + image + video in (video band 75–90) with strong vision rows (MMMU 86, VideoMMMU 84, MathVision 88, CharXiv 81.5, V* 96.9); no audio and no generation modalities hold it at 85.
- **Coding: 86/100.** SWE-bench Verified 78.8 clears the 74 ref (independent Vals 73.4 essentially at ref), LCB 87.1 with Vals confirmation, SWE-Pro 56.6; capped by Vibe 25.6, AA Coding Index 54.5 (under 70), TB2.1 53.2, and no DeepSWE/SciCode row.
- **Cost efficiency: 91/100.** $0.50/$3.00 with $0.05 cache reads undercuts the $0.60/$2.20 ≈ 92 anchor on input (OpenRouter $0.325/$1.95 cheaper still); deducted for the 256K→1M tier jumping to $2/$6 (whole-request) and the always-on reasoning tax inflating output tokens — plus no open weights to self-host.
- **Overall Score: 85/100.** (82+78+95+85+86)/5 = 84.8 → 85 — the value flagship: 1M context, video input, SWE-V 78.8 and τ² 97.7 at sub-anchor prices; the 27 AA Index, 28.8 HLE, and weak GDPval/Toolathlon rows are the honest offsets.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Qwen3.6 launch post rows via BenchLM's 63-row evidence table; AA model benchmarks; Vals AI leaderboards; Claw-Eval leaderboard; Epoch FrontierMath; llm-stats/tokenmix/computertech/awesomeagents release coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
