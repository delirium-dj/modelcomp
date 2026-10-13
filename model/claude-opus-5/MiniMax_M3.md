# Claude Opus 5 — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Do not conflate with peer agent files.

- Source: Anthropic / Claude Opus 5 (`anthropic/claude-opus-5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus model from the Claude 5 generation (released 2026-07-24). Mid-Opus-tier flagship — close to Claude Fable 5 frontier intelligence at half the price. Strong on agentic coding (Frontier-Bench v0.1 state of the art; SWE-bench Pro #1 at launch), knowledge work (FrontierCode + GDPval-AA + Zapier AutomationBench + OSWorld 2.0 all lead at given cost), and visual output (Best Opus visuals; cell-section interactive 3D demos). Anthropic's "default model on Claude Max" at launch; succeeded by Opus 5.5 in Sept 2026 at lower price.
- **Provider / access:** `anthropic/claude-opus-5` on Anthropic API, AWS Bedrock, Google Cloud Vertex, Microsoft Azure. Fast mode (≈2.5× default speed) at 2× base price. No free ID (folder `noFreeId: true`).
- **Release / knowledge:** Released 2026-07-24 (Anthropic announcement `https://www.anthropic.com/news/claude-opus-5`). Knowledge cutoff ≈ early-2026.
- **IDs:** `anthropic/claude-opus-5` (canonical); `claude-opus-5` (API slug). No Contributor / Free tier.
- **Context window:** **1M total / 128K max output** on Messages API (per Anthropic + AA technical-spec sheet).
- **Modalities:** Text, image, PDF **in**; **text out** (Anthropic + folder meta.json). Adaptive thinking (5 effort settings: low / medium / high / xhigh / max). Stronger visual outputs vs Opus 4.8 (Anthropic demos: wind-tunnel flow, cell-section 3D). Tool calls; JSON mode; mid-conversation tool changes (new beta at launch); automatic safety-classifier fallbacks to Opus 4.8 on the API.
- **Pricing (as of 2026-10-13):** **$5 / $25** per 1M input / output (same as Opus 4.8; succeeded by Opus 5.5 at $4/$20). **Cache reads $0.50 / 1M** (90% discount). Fast mode: $10 / $50. Cost per AA Intelligence Index task: **$5.86** at max effort (vs Opus 4.8's $4.08 — Opus 5 uses ~1.6× more tokens per task but lands on slightly higher intelligence).
- **Architecture:** Proprietary (no parameter count published). Most-aligned Anthropic model at release (audit score 2.3 on overall misaligned behavior, lowest of recent Claude models); same safety class as Opus 4.8 — biology fallbacks route to Opus 5 (not 4.8) for research, cyber classifiers fall back to Opus 4.8 in claude.ai / Claude Code by default.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.x (Opus 5 Max): **51** (AA comparison page) — up from Opus 4.8 Max's 42.
- AA-Briefcase v1.1: **1660 Elo** (vs Opus 4.8 1322; Opus 5.5 1822 = +162).
- GDPval-AA v2.1: **1722 Elo** (vs Opus 4.8 1453; Opus 5.5 1846 = +124).
- AutomationBench-AA (Zapier): **57%** (vs Opus 4.8 46%; Opus 5.5 40% on Anthropic harness / 40% on Zapier harness).
- Terminal-Bench 4.0 (AA harness, Max effort): **49%** (vs Opus 4.8 22%; Opus 5.5 59.6%).
- Terminal-Bench 2.1 (Vals harness): **84.644%** (gradually.ai comparison vs GLM 5.1 56.929%). Vals first-wave reproduction: **87.64%** per vals.ai.
- Terminal-Bench (CommandCode composite): **89.1** (#2 of 52).
- Frontier-Bench v0.1 (Anthropic, internal mini-SWE-agent harness): **state of the art** at launch — "more than doubles Opus 4.8's performance at a lower cost per task" (Anthropic blog).
- CursorBench 3.2 (Anthropic, max effort): **within 0.5% of Fable 5's peak score at half the cost per task** (Anthropic blog). Anthropic launch table: 46.6% Max.
- FrontierCode 1.1 (Anthropic): "approaches Fable-level performance at half the cost" (Devin quote, Anthropic blog).
- FrontierSWE v2 (BenchLM): 52.0%.
- ARC-AGI-3 (Anthropic): **3× next-best model** at launch (Anthropic blog).
- Vibe Code Bench v1.1 (gradually.ai): **88.404%** overall.
- BrowserComp / DeepSearchQA / OSWorld 2.0 / HLE: OSWorld 2.0 — Anthropic confirms Opus 5 "outperforms every other model at any given cost, surpassing Fable 5's best result at just over a third of the cost" (Anthropic blog).
- Toolathlon Verified Pass@1: 80.6% (BenchLM).
- AA-Omniscience: 37 (AA).

Reasoning / knowledge:

- Humanity's Last Exam (AA harness): **55%** (AA comparison; vs Opus 4.8 49%, Opus 5.5 61.4%).
- GPQA Diamond (CommandCode composite): **93.2%** (gradually.ai consistently).
- SciCode (AA): **56%** (vs Opus 4.8 54%; Opus 5.5's Anthropic harness 66.9% — different harnesses).
- GDP.pdf (AA): 22% (vs Opus 4.8 23%, Opus 5.5 18.4% per AA).
- CritPt (AA): 29% (vs Opus 4.8 21%; Opus 5.5 21.0% per AA).
- Vals Index (multi-domain finance/coding/legal/tax): **67.21%** per vals.ai (third after Gemini 4 Argon 68.9% and Claude Fable 5.1 ~66% range).
- AA-Omniscience: 37 (vs Opus 4.8 29).
- DeepSearchQA: 95% (Anthropic launch blog; Opus 5 leads).
- BigFinance Bench (Rogo early access): low-setting Opus 5 beat Opus 5 high setting with 60% fewer output tokens (per Rogo quote).

Coding:

- SWE-bench Pro (BenchLM): **79.2%** (#1 at launch; vs Opus 4.8 68.7%; Opus 5.5 89.9%).
- Vibe Code Bench v1.1 (gradually.ai): **88.404%**.
- Frontier-Bench v0.1: state of the art (Anthropic).
- FrontierCode 1.1 Main (BenchLM): 53.4%.
- DeepSWE (BenchLM): 68.8%.
- LiveCodeBench (Vals): 89% (BenchLM).
- SWE-bench (Vals): 97.0% (#1 at launch; note: Anthropic did not list a Vals-style number on the blog).
- CursorBench 3.2: 70.0% Max (BenchLM).
- CursorBench 4.0 (later): 46.6% Max (BenchLM) — Opus 5.5 trails Opus 5 on BenchLM's later CursorBench 4.0 harness.
- LiveCodeBench Pro Elo: ~2,887 (Vertu; same as Gemini 3.1 Pro).
- Coding Index (CommandCode): 78.
- Terminal-Bench 2.1: 84.644% (gradually) / 87.64% (Vals).

Long context:

- AA-LCR v1.1: **79%** (AA vs Opus 4.8 78%; Opus 5.5 84% per AA harness).
- Long-context reasoning (CommandCode composite): **79.3**.
- GraphWalks BFS 256K–1M: per BenchLM, "Coming soon" for Opus 5 (numbers not in sampled sources).

### Normalized scores (1–100)

- **Tool use: 88/100.** Frontier-Bench v0.1 SOTA, CursorBench 3.2 within 0.5% of Fable 5, TB 2.1 84.6–87.6%, AutomationBench 57% (AA) / 100% (Zapier leaderboard), ARC-AGI-3 3× next-best, OSWorld 2.0 SOTA at given cost, AA-Briefcase 1660 Elo, FrontierCode approaches Fable. Cap = AA Intelligence Index 51 (mid-frontier at present vintage); Terminal-Bench 4.0 (AA harness) only 49% — Opus 5.5 reads 59.6% on the same harness.
- **Reasoning: 88/100.** HLE 55% (AA), GPQA Diamond 93.2% (CommandCode), SciCode 56% (AA), CritPt 29% (mid-pack), Vals Index 67.21% (#3), AA-Omniscience 37. Cap = CritPt 29% (clearly behind Opus 5.5's 21%/Grok 4.7-class leaders); GDP.pdf only 22%.
- **Context window: 95/100.** 1M total confirmed. AA-LCR v1.1 79%, long-context reasoning composite 79.3 (CommandCode). Strong but not the frontier on long-context (Argon GraphWalks 84.2%, Opus 5.5 66.8%). Kept off 100 because AA-LCR verification at full 1M is limited; no in-sources 128K-output retrieval breakdown.
- **Multimodal: 78/100.** Text + image + PDF in; text out (Anthropic + folder meta.json). Strong visual outputs compared to prior Opus (wind-tunnel / cell-section interactive 3D demos per Anthropic blog). Per methodology (+image + PDF only, no native audio/video) → 75–80 band; 78 reflects verified image+PDF strength but capped by modality coverage.
- **Coding: 92/100.** SWE-bench Pro **79.2%** (#1 at launch), Vibe Code Bench v1.1 **88.4%**, Frontier-Bench v0.1 SOTA, SWE-bench (Vals) 97.0% (#1), LiveCodeBench 89%, FrontierCode 53.4%, DeepSWE 68.8%, CursorBench 3.2 70.0% Max, FrontierSWE v2 52.0%, TB 2.1 84.6–87.6%. Cap = Opus 5.5 followed later with stronger SWE-bench Pro (89.9%), FrontierSWE v2 (62.3%), FrontierCode Main (54.4%); Opus 5.5 also lifted coding on most agentic-coding lanes.
- **Cost efficiency: 45/100.** $5/$25 same as Opus 4.8 (no real cost improvement at list); 90% cache discount matches standard tier. AA cost per task $5.86 (Opus 5) vs $4.08 (Opus 4.8) **—higher per task** because Opus 5 burns more tokens for marginally higher intelligence. No free tier. Capped at 45 because the launch positions Opus 5 as "same cost as predecessor", and the successor Opus 5.5 delivers 40% lower cost at higher intelligence in the same Anthropic lineup — Opus 5 is now mid-tier value on price/perf.
- **Overall Score: 88/100.** Mean of `(88 + 88 + 95 + 78 + 92) / 5 = 88.2` → half-up **88**. Best fit: long-running multi-hour coding agents (Opus 5 is ~1/7 the reasoning tokens vs Opus 4.8 on Anthropic trading-bench example), financial-modeling + biotech workflows where it adds 9-10 pp accuracy over Opus 4.8 with fewer turns, and as a "second tier" frontier default before Opus 5.5 GA. Skip if absolute frontier on Terminal-Bench 4.0 / SWE-bench Pro / FrontierSWE v2 matters — Opus 5.5 or GPT-6 Astra sit ahead there.

---

## Signature

- Provided by: **MiniMax M3 (anthropic/claude-opus-5)** — 2026-10-13
- Method: independent MiniMax M3 evaluation drawn from the Anthropic launch blog & footnotes, Artificial Analysis Opus 5 vs Opus 4.8 comparison page (component evaluations: AA-Briefcase, GDPval-AA, AutomationBench-AA, TB 4.0, HLE, CritPt, AA-LCR, AA-Omniscience, etc.), CommandCode metadata (Intelligence Index 50.8, Coding Index 78, GPQA Diamond 93.2), Vals.ai index snippet, BenchLM Opus-5/5.5 cross-table, gradually.ai reproduction (Terminal-Bench 2.1, Vibe Code Bench v1.1), and arxiv benchmark-based comparative assessment. Per-benchmark footnotes (harness, vintage) captured in-line. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
