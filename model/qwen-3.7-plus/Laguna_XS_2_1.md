# Qwen3.7-Plus — findings by Laguna XS 2.1

- Source: Alibaba (`qwen3.7-plus`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Plus
- **Short description:** Alibaba's cost-effective multimodal member of the Qwen3.7 series (2026-06-01) — "Max with eyes": text/image/video input, GUI-agent grounding (perceive screens, interact with GUIs, navigate mobile apps), 1M context, at roughly a sixth of Qwen3.7-Max's price.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (`qwen3.7-plus`, snapshot `qwen3.7-plus-2026-05-26`), Qwen Chat, Fireworks serverless (`accounts/fireworks/models/qwen3p7-plus`, OpenAI- and Anthropic-compatible). Proprietary — no downloadable weights.
- **Release / knowledge:** 2026-06-01 (blog 2026-05-31; snapshot 2026-05-26); knowledge cutoff not published in sources found.
- **IDs:** `qwen3.7-plus` (Model Studio); `alibaba/qwen3.7-plus` (gateways). No Zen Free ID found.
- **Context window:** 1M tokens (991.8K max input; 983.6K with thinking); 65.53K max output. (Fireworks serving lists a 262K window.)
- **Modalities:** text, image, video in; text out; reasoning yes (thinking/non-thinking selectable per request); tool calls yes; JSON mode yes; GUI grounding.
- **Pricing (as of 2026-10-04):** Model Studio intl $0.40 / $1.60 per 1M in/out (cached $0.08; ≤256K China tier $0.276/$1.101; 256K–1M tier $0.826/$3.301); Fireworks $0.50 / $3.00, cached $0.10, Batch 50%.
- **Architecture:** proprietary; parameter count not published. End-to-end throughput ~147 t/s (AtlasCloud measurement), 67 t/s on AA's Intelligence Index run.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **76.4** (Qwen launch materials via apidog — tied with Qwen3.7-Max)
- ScreenSpot Pro (GUI grounding): **79.0** (Qwen launch — frontier-tier; Max cannot run it)
- Terminal-Bench: **70.3** (Qwen launch via apidog; slightly ahead of Max's 69.7)
- τ²-bench: **93.0%** (Epoch AI via Model Beat)
- AA Agentic context: Intelligence Index eval cost $568, 130M output tokens (Artificial Analysis)
- Claw-Eval / GDPval / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.9%** (Epoch via Model Beat)
- HLE: **35.6%** (Epoch via Model Beat; improved from 33.4 in Aug 2026 update)
- AIME 2024/2025: **93.3%** (Epoch); AIME 2025 **14/15 with thinking** — matching Qwen3.7-Max at ~3x speed (AtlasCloud)
- AA Intelligence Index: **25** (Artificial Analysis; above the 12 median for its tier)
- SciCode: **46.1%** (Epoch via Model Beat)
- CritPt / LCR: no verified public score found

Coding:

- SWE-bench Pro: **~60%** (Qwen launch via apidog; level with Max's 60.6)
- BugFind-10 (real-bug repair, Stirrup scaffold): **10/10** single-run (AtlasCloud; Max 9/10, 3.6-Plus 9/10 — small suite, task-fit signal only)
- Terminal-Bench **70.3** (see above)
- SWE-bench Verified / LiveCodeBench: no verified public score found in sources checked

Long context:

- 1M window (Model Studio docs); MRCR / RULER / GraphWalks: no verified public score found

Multimodal (supporting): LM Arena vision ~#16, text ~#15 (May 2026); GUI/agent capabilities per Model Studio description

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP-Atlas 76.4 (Max-level), ScreenSpot Pro 79.0 GUI grounding and τ²-bench 93.0% make it a strong agent driver; capped by TB 70.3 and missing GDPval/Tau3 rows.
- **Reasoning: 76/100.** AIME 93.3% (Max-parity with thinking) and GPQA 87.9% are good for the price; capped by HLE 35.6% and AA Index 25 well below flagships.
- **Context window: 95/100.** 1M window (95–100 tier) with thinking-mode headroom documented; no public retrieval-at-length number found, so the floor.
- **Multimodal: 88/100.** Text/image/video in with real GUI grounding (ScreenSpot Pro 79.0) — top of the video-in band (75–90); text-only output caps it.
- **Coding: 79/100.** SWE-bench Pro ~60%, TB 70.3 and a 10/10 BugFind-10 run at 3.5x the previous generation's throughput; capped by no SWE-bench Verified/LiveCodeBench rows and vendor-run evidence.
- **Cost efficiency: 93/100.** $0.40/$1.60 with $0.08 cache reads beats the methodology's $0.60/$2.20 (~92) anchor; the 256K+ tier ($0.826/$3.301) and slow 67 t/s AA-measured speed cap it.
- **Overall Score: 84/100.** Mean of (82, 76, 95, 88, 79) = 84 — the budget multimodal agent pick: vision + GUI + 1M context at mini-tier prices.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Qwen blog + Model Studio docs, Fireworks launch post, apidog, AtlasCloud hands-on, Artificial Analysis, Model Beat/Epoch); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
