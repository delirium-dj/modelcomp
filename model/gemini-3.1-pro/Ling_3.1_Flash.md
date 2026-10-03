# Gemini 3.1 Pro — findings by Ling 3.1 Flash

- Source: Google DeepMind (`google/gemini-3.1-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Preview)
- **Short description:** Google DeepMind's updated flagship (released 2026-02-19, still Preview six months later) — quality gains over Gemini 3 Pro in software engineering, agentic workflows, and finance/spreadsheet usability, plus more efficient thinking that lowers per-task token cost; strongest-value frontier reasoning model.
- **Provider / access:** Google Gemini API (`gemini-3.1-pro-preview`, Preview) and Vertex AI; Google AI Studio and OpenCode Zen free tier. Thinking levels LOW/MEDIUM/HIGH (benchmarks use HIGH unless noted).
- **Release / knowledge:** 2026-02-19; knowledge cutoff January 2025 per Gemini API docs (not stated on the DeepMind model card).
- **IDs:** `google/gemini-3.1-pro`; `gemini-3.1-pro-preview` on the Gemini API. Free tier exists on Google AI Studio and OpenCode Zen.
- **Context window:** 1,048,576 (1M) total per the DeepMind model card (site meta.json lists 2M — unverified by any cited source); 65,536 max output.
- **Modalities:** text, image, audio, video, PDF in; text out; tool calls, JSON mode, `thinking_level` control.
- **Pricing (as of 2026-10-02):** $2.00/$12.00 per 1M input/output for prompts ≤200K, rising to $4.00/$18.00 beyond 200K; Batch API half rate ($1/$6 ≤200K, $2/$9 above); Free tier on AI Studio / OpenCode Zen.
- **Architecture:** proprietary (Google DeepMind); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.8%** (tbench.ai official leaderboard, Gemini CLI harness, "high" effort, rank 14/17, ±3.3; a Terminus-2-harness run on the same board scores 65.6, rank 16)
- Terminal-Bench 2.0: **68.5%** (vendor card, Terminus-2 harness, high thinking; vs 3 Pro 56.9%, Opus 4.6 65.4%, GPT-5.3-Codex 64.7%)
- Toolathlon-Verified: **61.1%** (toolathlon.xyz, ±9.7)
- SWE-bench Pro (Public): **54.2%** (vendor card, single attempt; vs 3 Pro 43.3%, GPT-5.2 55.6%, GPT-5.3-Codex 56.8%)
- Agents' Last Exam (Snorkel) / HMMT Feb 2026 (MathArena): tracked but no usable numeric score (HMMT flagged contaminated)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.5%** (vals.ai, rank 1/133 — near-saturated; vendor card self-reports 94.3%, no tools)
- Humanity's Last Exam (no tools, full text+MM set): **44.4%** (vendor card); **47.0%** (Artificial Analysis, no tools, 2026-08-17); **51.4%** with search (blocklist) + code (vendor self-report, not independently reproduced)
- ARC-AGI-2: **77.1%** (ARC Prize Verified; vs 3 Pro 31.1%, Opus 4.6 68.8%, GPT-5.2 52.9%) — more than double its predecessor
- LiveBench: **77.x** (livebench.ai composite across 7 domains, 2026-08)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **80.6%** (vendor card, single attempt, near-parity with Opus 4.6's 80.8%); **78.8%** (vals.ai, bash-only mini-swe-agent, rank 24/83 — saturated benchmark)
- LiveCodeBench Pro: **2887 Elo** (vendor-reported; vs GPT-5.2 2393 Elo)
- SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- MRCR v2 (8-needle, 128K): **84.9%** (vendor-reported; ties Opus 4.6's 84.9%)
- MRCR v2 at 512K–1M / RULER / GraphWalks: no verified public score found

Multimodal:

- MMMU-Pro: **80.5%** (vendor-reported)
- CharXiv / GDP.pdf / LVBench for 3.1 Pro: no verified public score found

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 65.8% (two independent harnesses agree within 0.2 pts) and Toolathlon 61.1% sit between the mid (45–60%) and frontier (88%+) reference bands; SWE-bench Pro 54.2% confirms solid-but-not-frontier agentics — this is a reasoning-first Pro model, not an agentic workhorse.
- **Reasoning: 92/100.** GPQA Diamond 95.5% (vals.ai rank 1/133), HLE 47.0% no-tools (AA) with a self-reported 51.4% with tools, and ARC-AGI-2 77.1% best-in-class clear the frontier reference bars; the contaminated HMMT row and unreproduced 51.4% tools figure cap it below 94.
- **Context window: 95/100.** 1M-token window with MRCR v2 84.9% at 128K only — no ≥98% retrieval-at-512K+ figure is published, so 100 is not justified (the 2M figure in site meta.json is unverified).
- **Multimodal: 92/100.** text/image/audio/video/PDF in with text out — the +audio-in band (90–100); MMMU-Pro 80.5% corroborates strong visual reasoning.
- **Coding: 84/100.** SWE-bench Verified 78.8–80.6% and LiveCodeBench Pro 2887 Elo are strong, but Terminal-Bench 2.1 65.8% is mid-tier and DeepSWE/SciCode/Vibe Code are unpublished for this release.
- **Cost efficiency: 100/100.** Free tier on Google AI Studio and OpenCode Zen; paid $2/$12 (≤200K) is itself ~85–88 tier, and Batch halves it again.
- **Overall Score: 87/100.** (74+92+95+92+84)/5 = 87.4 → 87 — the value pick for deep reasoning at Pro tier: ARC-AGI-2-leading abstraction and rank-1 GPQA at one-seventh of Opus 4.6's price, with mid-tier agentic tool use as the trade-off.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (DeepMind model card and eval methodology, vals.ai, Artificial Analysis, tbench.ai, Toolathlon, The Model Gap, MetricNexus); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
