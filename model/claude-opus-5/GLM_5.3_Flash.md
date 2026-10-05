# Claude Opus 5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (current Opus tier; successor to Opus 4.8; new default on Claude Max at launch)
- **Short description:** Anthropic's July 2026 Opus: complex agentic coding and enterprise work at half of Fable 5's per-token price — stronger self-verification, iteration and long-horizon completion, plus gains in scientific research (chemistry, biology, bioinformatics) and visual artifact generation. The 2026-10-05 enrichment pass added an independent SWE-bench Verified leaderboard reading.
- **Provider / access:** Anthropic Messages API (`claude-opus-5`; Vertex `claude-opus-5`; Bedrock `anthropic.claude-opus-5`); also Claude Platform on AWS, Google Cloud, Microsoft Foundry, Claude Code. Messages (not Chat Completions) API. Model IDs are pinned snapshots.
- **Release / knowledge:** released 2026-07-24. Reliable knowledge cutoff **May 2026**.
- **IDs:** `claude-opus-5` (API/Vertex), `anthropic.claude-opus-5` (Bedrock). No API free tier; chat-plan access via Claude Max (default model).
- **Context window:** 1,000,000 tokens with up to 128K output on the synchronous Messages API; extended output up to **300K tokens** via the Message Batches API (`output-300k-2026-03-24` beta header).
- **Modalities:** text + image (vision) in; text out. Adaptive thinking with effort parameter (defaults to high on the API and Claude Code).
- **Pricing (as of 2026-09-18):** $5.00 in / $25.00 out per 1M — same rate as Opus 4.8 despite the tier upgrade. Fast mode at ~2× base price for ~2.5× faster output. No free API tier.
- **Architecture:** proprietary, parameters undisclosed; proprietary transformer with adaptive thinking.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (per-model agent harness): **86.7%** with Claude Code (max) — 1st in Meta's 2026-08-05 launch table ahead of Muse Spark 1.2 82.9, GPT-5.6 Terra 81.8, Grok 4.5 81.6, Gemini 3.6 Flash 78.9 (Meta launch table via ai-tldr)
- DeepSWE 1.1: **65.0%** — 1st in the same table (Muse Spark 1.2 59.3, Terra 64.8) (same source)
- Meta Internal Coding Bench: **79.4%** — 1st (Muse Spark 1.2 70.6, Terra 65.4) (same source)
- OSWorld / BrowseComp / MCP Atlas / tau: no verified public score found for Opus 5 specifically

Reasoning / knowledge:

- CursorBench 3.2 (internal coding benchmark): **within 0.5% of Claude Fable 5's peak score at half the cost per task** (Anthropic positioning via ai-tldr)
- GPQA / HLE / ARC-AGI / AA Intelligence Index: no verified public score found for Opus 5 specifically

Coding:

- SWE-bench Verified: **97.00%** — leader of 86 models on the Vals AI SWE-bench Verified leaderboard (vals.ai); independently confirmed by DataCamp's "meilleur LLM pour coder" roundup dated 2026-09-25 (post-dating the 2026-09-18 pass) — fills the gap that pass marked "no verified public score found for Opus 5 specifically"
- Agentic-coding package above: TB2.1 86.7 + DeepSWE 65.0 + Meta ICB 79.4 — the strongest coding table row captured in the 2026-09-18 pass
- SWE-bench Pro / LiveCodeBench: no verified public score found for Opus 5 specifically

Long context:

- Window: **1M tokens / 128K out (300K via batches beta)**; retrieval benchmarks at window length: no verified public score found

### Normalized scores (1–100)

- **Tool use: 96/100.** Best-in-table TB2.1 86.7 with Claude Code plus DeepSWE 65.0 and ICB 79.4 — the top agentic-coding package measured in this pass; missing OSWorld/BrowseComp rows cap it.
- **Reasoning: 88/100.** No published GPQA/HLE for Opus 5 — scored on CursorBench-near-Fable positioning, the May 2026 cutoff and self-verification emphasis; below the 90s for lack of published reasoning evidence.
- **Context window: 100/100.** 1M input with a 128K standard output and 300K batch output — the most generous output package measured here.
- **Multimodal: 82/100.** Text + vision in, text out; no PDF/media limits documented this pass.
- **Coding: 96/100.** The independent SWE-bench Verified 97.00% (#1 of 86 on Vals AI, confirmed by DataCamp 2026-09-25) sits on top of the best-in-table agentic package (TB2.1 86.7, DeepSWE 65.0, ICB 79.4); only the missing SWE-Pro/LiveCodeBench rows keep it from 98+.
- **Cost efficiency: 20/100.** $5/$25 flagship pricing with no free API route — same expensive tier as Opus 4.6/4.8; Fast mode doubles it.
- **Overall Score: 92.4/100.** Five-dim mean per `RULES.md` (Cost excluded): (96 + 88 + 100 + 82 + 96) / 5 = 462/5 = 92.4. Best fit: the no-compromise agentic-coding Opus for pinned Anthropic workflows — now with the strongest independent SWE-bench Verified reading in this repo; Fable 5.1 remains the capability ceiling at 2× the price.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (2026-09-18 pass: ai-tldr.dev Claude Opus 5 page quoting Anthropic's announcement, pricing page and lineage, plus Meta's 2026-08-05 launch table via the Muse Spark 1.2 page; 2026-10-05 approved enrichment pass: Vals AI SWE-bench Verified leaderboard via vals.ai, DataCamp roundup 2026-09-25); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
