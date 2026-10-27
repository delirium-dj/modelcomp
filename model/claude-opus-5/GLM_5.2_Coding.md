# Claude Opus 5 — findings by GLM 5.2 Coding

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's "thoughtful and proactive" Opus generation, released 2026-07-24 at the same price as Opus 4.8 ($5/$25) — pitched as "close to the frontier intelligence of Claude Fable 5 at half the price." New SOTA on Frontier-Bench v0.1, GDPval-AA, CursorBench 3.2 (within 0.5% of Fable 5's peak at half cost), ARC-AGI 3 (3x next-best), AutomationBench (~1.5x next-best pass rate), OSWorld 2.0 (beats Fable 5's best at ~1/3 the cost). Most aligned Anthropic model to date (2.3 misalignment score on automated behavioral audit); deliberately NOT cyber-trained, yet near Mythos 5 at finding vulns but far behind at exploiting them.
- **Provider / access:** Anthropic API (`claude-opus-5`), claude.ai (new default on Claude Max, strongest on Claude Pro), Claude Code, Claude Cowork; DeepInfra (1M/1M context per LLM Stats provider table); Bedrock/Vertex enterprise channels per family pattern. Fallback: flagged cyber requests route to Opus 4.8 by default; API fallbacks available; CVP (Cyber Verification Program) members get a lower-restriction version.
- **Release / knowledge:** 2026-07-24 (LLM Stats). Knowledge cutoff not stated in launch post.
- **IDs:** `anthropic/claude-opus-5`. Family context: sibling of Sonnet 5 / Fable 5 / Mythos 5; succeeded by Opus 5.5 (2026-09-22, $4/$20 — cheaper AND newer, compressing Opus 5's value case).
- **Context window:** 1M in / 128K out via Anthropic; DeepInfra lists 1M/1M (LLM Stats provider table) — discrepancy noted, Anthropic canonical.
- **Modalities:** text + image in, text out; adaptive thinking with effort settings (low→max) that trade intelligence vs tokens; tool use, computer use (OSWorld-strong), code execution; "much stronger visual outputs" (slides/3D per testimonials).
- **Pricing (as of 2026-10-09):** $5.00 / $25.00 per 1M in/out; cached $0.50 (Anthropic); Fast mode ~2.5x speed (premium priced per family pattern). DeepInfra same $5/$25.
- **Architecture:** proprietary, closed weights; parameters undisclosed.

### Raw benchmarks found

> Primary: Anthropic launch post 2026-07-24 (vendor, effort-curve charts render as images — only prose-stated values logged; no numbers invented). LLM Stats dataset tables JS-gated. Cross-vendor rows from Sept tables (Google/xAI/OpenAI) where Opus 5 appears.

Agent / tool use:

- AutomationBench (Zapier): "pass rate ~1.5× the next-best model for the same cost per task; even at lowest effort, passes more tasks than any other model" (Anthropic; number not stated in prose). Cross-table: Opus 5 26.9% (OpenAI Astra table) — same-bench comparability caveat: Astra 41.4%, Opus 5.5 42.5% max later overtook.
- OSWorld 2.0: "outperforms every other model at any given cost, surpassing Fable 5's best at ~1/3 the cost" (Anthropic prose). Cross-table: Opus 5 74.0% (Apidog Fable 5.1 table).
- Frontier-Bench v0.1: "surpasses all other models; more than doubles Opus 4.8's performance at lower cost per task" (number in image chart only).
- GDPval-AA v2: **1,824 Elo** (Google 3.8 Flash table) — field leader there (vs Sol 1,710, 3.8 Flash 1,545); Opus 5.5's 1,846 later edged it.
- Vals Finance Agent v2: **58.6%** (Google table) vs 3.8 Flash's 61.4%, Sol's 53.8%.
- Harvey Legal Agent: no Opus 5 row in Google's table (Grok 4.7 19.6% led).
- Terminal-Bench 4.0: **52.3%** (OpenAI Astra table; xAI table same) vs Fable 5.1's 57.9%, Astra's 57.7%.
- AA Briefcase v1.1: no Opus 5 row (xAI table).

Reasoning / knowledge:

- ARC-AGI 3: "3x the next-best model's score" (Anthropic prose; number in chart). Cross-table: Opus 5 30.2% (OpenAI Astra table) vs Astra's 99.9% — the "3x next-best" claim predates Astra.
- HLE with tools: **63.6%** (OpenAI Astra table) vs Fable 5.1's 65.0%, Astra's 57.2%.
- HLE-Verified: **54.4%** (Google table) — 0.1 pt under 3.8 Flash's 54.9%.
- BioMysteryBench human-difficult: **49.4%** (Google table — ties Terra, leads Sol's 44.7%); LVBench **74.5%** (Google table).
- Life sciences: beats Opus 4.8 on every life-sciences eval; +10.2 pts on organic-chemistry spectroscopy inference, +7.7 pts on protein-variant effect prediction (internal).
- GPQA: no verified public row found this session.

Coding:

- CursorBench 3.2: "within 0.5% of Fable 5's peak at half the cost; best performance-at-cost on high/xhigh/max" (Anthropic; number in chart). Cross-table: CursorBench 4.0 **46.6%** (xAI table) vs Grok 4.7's 46.3%, Fable 5.1's 51.8%.
- FrontierCode 1.1 Main: **53.4%** (OpenAI Astra table) vs Astra's 53.3% — edges the flagship; Extended: no Opus 5 row verified.
- DeepSWE v1.1: **74.0%** (public leaderboard via Vellum) — frontier cluster (Muse 75.4, Astra 74.1, 3.8 Flash 73.7).
- Terminal-Bench 4.0 52.3% doubles as the agentic-coding headline (see agent section).
- SWE-bench Verified: no verified row for this checkpoint.
- Devin/Cursor/Lovable testimonials: FrontierCode 1.1 near-Fable at half cost; +22% over Opus 4.7 on Lovable's hardest agentic coding; 26% fewer tokens at similar quality on legal work; ~1/7 the reasoning tokens at under half latency on trading tasks.

Security / alignment (secondary):

- Automated behavioral audit: **2.3** misaligned-behavior score — lowest of recent Anthropic models; best Constitution adherence; lowest deception; safest on irreversible actions.
- OSS-Fuzz: close to Mythos 5 finding vulns; "far behind" on exploit development (deliberate — no cyber training).
- Cyber classifiers: intervene ~85% less than Fable 5's; allow source-code vuln finding; block binary-based scanning, pentesting, exploit generation.
- Does not advance dual-use frontier; behind Mythos 5 in bio research + offensive cyber (system card).

Long context:

- 1M in / 128K out (Anthropic; DeepInfra claims 1M/1M). No MRCR/RULER row — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 90/100.** OSWorld 2.0 best-at-any-cost per Anthropic (74.0% cross-table), AutomationBench 1.5x-next-best at launch (26.9% later exceeded by 5.5-gen), GDPval 1,824 Elo led Google's table, TB 4.0 52.3%, Frontier-Bench SOTA — the cost-efficiency agent story is the launch thesis; capped by newer models (Opus 5.5/Astra/Argon) now beating its rows.
- **Reasoning: 88/100.** ARC-AGI 3 3x-next-best at launch (30.2% absolute), HLE-tools 63.6% near the top, HLE-Verified 54.4%, life-sciences sweep (+10.2 organic chem) — strong across novel-problem and knowledge work; capped by no GPQA row and Astra's later ARC saturation.
- **Context window: 92/100.** 1M in / 128K out verified; no retrieval benchmark; DeepInfra 1M/1M claim unconfirmed.
- **Multimodal: 78/100.** Text + image in; "much stronger visual outputs" (slides/3D testimonials — the only launch cycle where OUTPUT-side visuals were a headline); FreeCAD CV-pipeline anecdote shows vision-agentic depth; no native audio/video verified.
- **Coding: 91/100.** CursorBench 3.2 within 0.5% of Fable 5 at half cost, FrontierCode 1.1 Main 53.4% edges Astra, DeepSWE 74.0% frontier cluster, TB 4.0 52.3%, Frontier-Bench SOTA — near-flagship coding at mid-flagship price; capped by Argon's 77.9% and Opus 5.5's sweep.
- **Cost efficiency: 72/100.** $5/$25 held from 4.8 while capability jumped = strong at launch (half Fable 5's price); but Opus 5.5 (2026-09-22) delivers more at $4/$20, and effort-curve efficiency (26% fewer tokens, 1/7 reasoning tokens per testimonials) is real but priced at premium rates; Fast mode costs more.
- **Overall Score: 88/100.** (90 + 88 + 92 + 78 + 91) / 5 = 87.8 → 88. Best-fit: the July–Sept 2026 "frontier intelligence at half price" pick — daily-driver agentic coding, OSWorld computer use, and GDPval-class knowledge work; as of Oct 2026 Opus 5.5 supersedes it on price-performance, so choose Opus 5 only where its specific judgment/verification profile or DeepInfra 1M-output hosting matters.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Anthropic launch post claude-opus-5 primary; LLM Stats page for pricing/context/providers; cross-vendor rows from OpenAI Astra, Google 3.8 Flash, and xAI Grok 4.7 launch tables; Vellum Astra article for DeepSWE leaderboard context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.