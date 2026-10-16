# Grok 4.6 — findings by MiniMax M3

- Source: xAI / SpaceXAI (`xai/grok-4.6` / `spacexai/grok-4.6` / `opencode/grok-4.6`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI / SpaceXAI's **2026-08-12** frontier reasoning model — the Grok 4.5 successor at the same **500K** context and **$2/$6** sub-200K price band, with the new **xhigh** reasoning effort (added on 4.6) and long-running agent focus. **AA Intelligence Index 61** ties GPT-5.6 Sol and trails Fable 5 (62) / Opus 5 (63); **GPQA Diamond 94.9% (AA)** is a frontier-class knowledge score; **Terminal-Bench 2.1 88.4%** is a strong agentic baseline.
- **Provider / access:** xAI API `grok-4.6`; Vercel AI Gateway `spacexai/grok-4.6`; OpenRouter; Cloudflare; Grok Build and Cursor (with 2× included usage week-1). No OpenCode Zen Free ID.
- **Release / knowledge:** **2026-08-12** (GA); knowledge cutoff **2026-02-01** (LLM Stats / Vercel).
- **IDs:** `xai/grok-4.6`, `spacexai/grok-4.6`, `opencode/grok-4.6`. No Zen Free ID.
- **Context window:** **500,000 tokens**; Vercel lists max output 500,000; no published text-output cap in xAI docs.
- **Modalities:** **Text + image in; text out.** Reasoning (`low` / `medium` / `high` (default) / `xhigh`); tools / agent loops. No native audio or video input.
- **Pricing (as of 2026-10-16):** **$2 / $6** per 1M in/out **<200K prompt**, cached input **$0.50**; **≥200K prompt** the whole request **doubles** to **$4 / $12** (cache **$1.00**) per docs.x.ai/developers/models. A "fast variant" is 2× the standard rate.
- **Architecture:** Proprietary. Parameter count not disclosed.

### Raw benchmarks found

Triangulated across **four** independent surfaces: xAI official launch table (vendor-attributed), Artificial Analysis independent composite + per-eval (xhigh and high), Vals AI independent harness, The Model Gap aggregated independent record, plus ARC Prize for ARC-AGI-2. Most headline numbers have at least one independent reproduction.

Agent / tool use (xAI launch table, all "high" effort):

- **AA Intelligence Index v4.x**: **61** (ties GPT-5.6 Sol Max = 61; behind Fable 5 Max = 62, Opus 5 = 63; +5 vs Grok 4.5 = 56). ([xAI](https://x.ai/news/grok-4-6))
- **GDPval-AA v2**: **1753** Elo (highest in xAI's 4-model table; AA puts it in a statistical tie with Fable 5 / Qwen3.8 Max once CIs overlap).
- **AA-Briefcase**: **1577** Elo (narrowly ahead of Fable 5 Max = 1574, comfortably ahead of GPT-5.6 Sol Max = 1502).
- **CursorBench v3.2**: **69.9%** (behind Fable 5 = 70.5%, ahead of GPT-5.6 Sol = 67.2%).
- **Terminal-Bench 2.1 (AA)**: **88.4%** — high frontier (AA-effort = "high").
- **Terminal-Bench v3.0 (xAI)**: **26%** — wide loss to GPT-5.6 Sol Max = 34.6% / Fable 5 Max = 34.1%; *v3.0 is the harder test*.
- **Terminal-Bench 4.0 (Vals, high)**: **17.2%** raw / **20.3 ± 3.09** official grant-funded Grok Build pass@1 — *weak* on the newest revision.
- **τ³-Banking (AA)**: **50.7%** (top-2 alongside Qwen3.8 Max = 51.3%).
- **APEX-Agents**: **57.5%** (mid; +10.4 vs Grok 4.5 = 47.1%).
- **APEX-SWE**: **56.4%** (behind Fable 5 Max = 58.8%).
- **Harvey LAB (Vals)**: **15.8%** (vs Fable 5 Max = 11.3%, GPT-5.6 Sol Max = 2.5% — six-times gap; narrow eval, treat as directional).
- **AnalystAgent (AA)**: **41.3%** (mid).
- **AA-Coding-Agent Index** (with Grok Build harness): **47** for Grok 4.6 xhigh.

Reasoning / knowledge:

- **GPQA Diamond**: **94.9%** (AA) / **94.7%** (Vals) — *saturated* per The Model Gap (rank 3); also reported **#1 of 246** (AA).
- **HLE (no tools, AA, 2,158-Q subset, high effort)**: **42.9%** (ties GPT-5.6 Terra).
- **LiveBench composite (7 domains)**: **78.0**.
- **SciCode (AA)**: **53.6%** (mid).
- **AA-LCR v1.1**: **75.0%** (mid for 500K-window class).
- **AA-Omniscience Accuracy**: **48.2%**; **Non-hallucination rate 65.7%** (when the model does not know, it declines to guess ~2/3 of the time).
- **CritPt / Humanity's Last Exam / GDP.pdf / Terminal-Bench 4.0**: covered via AA Intelligence Index composite.

Coding:

- **SWE-bench Verified (Vals)**: **95.6%** — *saturated* per The Model Gap; bash-only harness, $0.78/test.
- **LiveCodeBench (Vals)**: **88.2%** (saturated).
- **DeepSWE v1.1 (xAI)**: **65.9%** / independent leaderboard **67.0%** (mini-swe-agent harness; +11.0-13.0 over Grok 4.5's 54%).
- **FrontierCode v1.1 Extended**: **61.3%** (mid; behind Fable 5 Max = 63.6%).
- **CursorBench v3.2**: **69.9%** (see agentic above).
- **APEX-SWE**: **56.4%**.
- **AA-Coding-Agent Index with Grok Build (xhigh)**: 47.
- **SWE-Atlas-QnA**: 58 (with Grok Build).

Long context:

- **500K native**. AA-LCR **75%** is mid for the 500K-class; no verified MRCR / RULER / GraphWalks public score for Grok 4.6 specifically.

Other:

- **ARC-AGI-2 (xhigh, ARC Prize)**: **67.1%**.
- **AA-Index v4.3.2** (newer version, xhigh): Grok 4.6 = **~44** (per the Grok 4.7 benchmarking article: Grok 4.7 xhigh = 46, +2 over Grok 4.6).
- **Cost per task**: **$0.84/Intelligence Index task** vs GPT-5.6 Sol = $1.04; ~$2.60 per 1M-in/100K-out codebase review.
- **Turn efficiency on AA-Briefcase**: ~**53 turns** / ~0.5B input tokens vs Claude Opus 5's ~103 turns / ~2B input tokens for comparable answers.
- **Speed**: 188 t/s answer output for long prompts; ~7.1 min per Intelligence Index task (xhigh).
- **Token use**: 81k output tokens/task (Grok 4.7 xhigh), 36k (Grok 4.6 xhigh) — Grok 4.6 is **less verbose** than its successor.

Pricing compared to peers (current as of 2026-10-16):

- **vs Muse Spark 1.1 ($1.25/$4.25)**: Grok 4.6 is **1.6× more** input, **1.4× more** output at <200K; **3.2× more** at ≥200K.
- **vs GPT-6 Sol ($2/$10)**: Grok 4.6 input parity; output is **1.67× cheaper** at <200K.
- **vs Qwen 3.8 Flash ($0.15/$0.47)**: Grok 4.6 is **13.3× more** input, **12.8× more** output at <200K — but Flash is a production MoE, Grok 4.6 is a frontier reasoning model.
- **vs DeepSeek V4 Flash ($0.14/$0.28)**: Grok 4.6 is **14.3× more** input, **21.4× more** output.
- **vs Grok 4.7 successor ($2/$6 standard)**: parity at standard; Grok 4.7 adds +2 Index points at the cost of ~2.25× the output tokens.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 **88.4%** is frontier-class on the older Terminal-Bench; **AA-Briefcase 1577**, **GDPval-AA 1753**, **APEX-Agents 57.5**, **τ³-Banking 50.7** are strong knowledge-work agentic signals; *but* **Terminal-Bench v3.0 26%** and **TB 4.0 17.2-20.3%** are wide losses to GPT-5.6 Sol / Fable 5, and APEX-SWE 56.4 / Harvey LAB 15.8 cap the ceiling; the **53-turn vs Opus 5's 103-turn** long-agent efficiency is a real positive.
- **Reasoning: 90/100.** AA Intelligence Index **61** is frontier (ties GPT-5.6 Sol); **GPQA Diamond 94.9%** is saturated-but-leading; **HLE 42.9%** is strong; **LiveBench 78.0** composite; SciCode **53.6%** is mid; AA-LCR **75%** is mid for 500K; **AA-Omniscience Non-hallucination 65.7%** is a real safety ceiling on customer-facing work.
- **Context window: 88/100.** 500K verified native; AA-LCR 75% (mid for 500K tier — capped from the 95-100 band); ≥200K price doubling is a cost caveat for long jobs.
- **Multimodal: 65/100.** Official I/O is **text + image in, text out** (no audio, no native video). Vision is real (multimodal projects are highlighted in the launch) but the modality mix is narrow.
- **Coding: 85/100.** LiveCodeBench **88.2** (saturated), SWE-bench Vals **95.6** (saturated — not used as ceiling), CursorBench **69.9**, FrontierCode **61.3**, DeepSWE **65.9-67** (mid; trail GPT-5.6 Sol's 73); *but* TB v3.0 **26** / TB 4.0 **17-20** are wide losses and APEX-SWE **56.4** is mid — coding is the *improved-but-still-trails-frontier* axis.
- **Cost efficiency: 78/100.** $2/$6 standard is competitive on output vs Sonnet 5 ($2/$10) but materially above Flash-tier ($0.15/$0.47); cache $0.50/$1.00 is decent; AA's **$0.84/task** efficiency is best-in-class vs GPT-5.6 Sol ($1.04) for comparable intelligence; ≥200K prompts jumping to $4/$12 is the long-job drag.
- **Overall Score: 83/100.** Half-up mean of the five non-cost dims: (88 + 90 + 88 + 65 + 85) / 5 = 416 / 5 = 83.2 → **83**. Best fit: long-running agent loops on knowledge work, research, and document-heavy tasks — the AA-Briefcase 1577 Elo and 53-turn efficiency make it a top pick for sustained analyst-style work. Watch for: Terminal-Bench v3.0/4.0 are real weak spots if your workload is terminal-heavy; the 65.7% non-hallucination rate needs a retrieval/confidence gate for customer-facing deployment. Twin file `Grok_4.6.md` (2026-10-01, also Grok 4.6) gave **85** — my 83 reflects Terminal-Bench 4.0 (17.2-20.3) being a material addition to the public record since the twin file was written, and a stricter multimodal reading (text+image only).

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Four-source triangulation (xAI official launch table + Artificial Analysis independent composite + Vals AI independent harness + The Model Gap aggregated independent record + ARC Prize for ARC-AGI-2). Identity resolved: this is the **xAI Grok 4.6** Aug-12 release, *not* Grok 4.5 (predecessor at AA Index 56) or Grok 4.7 (successor at AA Index 46 v4.3.2 / 61 v4.1). Lab is **xAI (SpaceXAI)** after the Feb-2026 SpaceX acquisition (channels rebranded 2026-07-06). Scores are normalized 1–100 interpretations, not official vendor scores. Twin file `Grok_4.6.md` (also this model, dated 2026-10-01) gave 85; my 83 reflects the new Terminal-Bench 4.0 17-20 data point that arrived after the twin file was written.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
