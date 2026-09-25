# Claude Opus 5.5 — findings by Muse Spark 1.2

- Source: Anthropic / Claude Opus 5.5 (anthropic/claude-opus-5.5)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's first Claude 5.5 family model — frontier agentic coding, computer use and knowledge work at Opus 5 level but 40% cheaper; first to top AA Intelligence Index 58.
- **Provider / access:** Anthropic Claude API / Google Vertex — API ID `claude-opus-5.5` (Anthropic API with adaptive thinking always-on, effort medium default). Platform docs platform.claude.com overview.
- **Release / knowledge:** Released 2026-09-22 (anthropic.com/claude-opus-5.5, AA article Sep 22); knowledge/reliable cutoff Jun 2026 per platform docs; adaptive thinking (cannot disable).
- **IDs:** `anthropic/claude-opus-5.5`
- **Context window:** 1,000,000 tokens (1M) total, 128K max output (300K with beta header on Batch API) — verified via platform.claude.com overview; tokenizer ~555K words per 1M (Opus 4.7+).
- **Modalities:** Text + image in → text out; reasoning yes (adaptive thinking always on, effort low/medium/high/xhigh/max); tool calls / computer use (computer_20251124 deprecated) / structured outputs.
- **Pricing (as of 2026-09-25):** **$4 / $20** per 1M input/output (20% cut from Opus 5 $5/$25), cache write $5/1M (5m TTL, $6.25 prior), cache read $0.20/1M (60% cut from $0.50, 95% discount vs input), Batch 50% off. Source: AA article, platform.claude.com pricing.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (agentic terminal coding, xhigh, Claude Code harness 5 trials/task): **66.4%** (Anthropic: 66.4 vs Fable 5.1 55.8%, Opus 5 52.3%, GPT-6 Astra 57.9% high; AA also 59.6% TB4.0 at AA harness — dual harness reported; SE ±2.6)
- Tau3-Banking / Tau2: **no verified public Tau3-Bench % found for Opus 5.5 in this set** (Tau not in Anthropic table; AA Knowledge work GDPval used instead)
- GDPval-AA v2.1 (knowledge work, Elo, 44 occupations): **1846 Elo** (Anthropic, AA, Layer3Labs: 1846 vs Fable 1735, Opus 5 1708, GPT-6 Astra 1542; AA confirms; default medium beats Astra max at 1/5 cost)
- AA-Briefcase v1.1: **1822 Elo** (AA article: +143 over Fable 5.1, first Anthropic > GPT-5.6 Sol presentation quality)
- AutomationBench (Zapier business workflows, no fallback): **40.0%** (Anthropic table vs Astra 41.4, Fable 31.4, Opus 5 26.9%; Layer3Labs same)
- MCP Atlas / Toolathon: **no verified MCP Atlas % for Opus 5.5 in this snapshot** (Toolathlon not listed; AutomationBench proxy)
- OSWorld 2.0 (computer use, partial): **81.8% partial** (Anthropic vs Fable 80.7, Opus 74.0)
- CursorBench 4.0 (in-editor coding): **57.8%** (Anthropic vs Fable 51.8, Opus 46.6, GPT-5.6 Sol 41.7)

Reasoning / knowledge:

- HLE (Humanity's Last Exam, with tools): **67.7% with tools** (Anthropic vs Fable 65.6, Opus 63.6, Astra 57.2)
- AA Intelligence Index v? (composite): **58 max** — #1 on AA Index (AA article Sep 22: 58 at max, top spot by several pts; 4/5 efforts on Pareto frontier) — incorporates 10 evals: HLE 61.4%, SciCode 66.9%, GDPval-AA, Briefcase, Omniscience, AutomationBench etc.
- SciCode (AA): **66.9%** (AA article: 66.9 vs Fable 63.1, leader on Index)
- LCR / MRCR: **no direct MRCR/RULER % found** (AA-LCR composite inside Index)
- CritPt: behind on AA Index (AA note: remains behind on CritPt, AA-LCR, GDP.pdf) — **no isolated CritPt % extracted**
- GPQA Diamond: not isolated in Opus 5.5 table (HLE/GDPval focus); **no verified GPQA % found for Opus 5.5 in this snapshot** (Fable 92.6% reference but not this model)

Coding:

- FrontierCode v1.1 Main (repo-level merge-ready): **54.4%** (Anthropic vs Astra 53.3, Fable 50.3, Opus 48.0; xhigh/max harness)
- Terminal-Bench-Science 0.1 (agentic science, tools, ±3.5-5 SE): **58.7%** (Anthropic vs Astra 64.6, Fable 52.6, Opus 29.0)
- SWE-bench Verified / Pro / DeepSWE / LiveCodeBench: **no verified SWE-bench % published for Opus 5.5 in Anthropic table** (FrontierCode/CursorBench are coding proxies here); SWEBench not listed.
- Vibe Code Bench / SciCode already: SciCode 66.9% above.

Long context:

- 1M window claimed, but **no MRCR v2 128K/1M retrieval % reported for Opus 5.5** (only via AA composite GDP.pdf etc.)

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 66.4% leads GPT-6 Astra 57.9% +14 pts over Opus 5, OSWorld 81.8% + AutomationBench 40% near leader 41.4% and CursorBench 57.8% +16% over GPT-5.6 Sol — frontier agentic suite justifies high; capped below 95 because AutomationBench trails Astra 41.4 and no Tau3 elite to confirm across harnesses.
- **Reasoning: 94/100.** HLE 67.7% with tools near frontier (53-65% band) + AA Index 58 #1 (6/10 eval leads: HLE, SciCode 66.9%, GDPval 1846, Briefcase 1822, Omniscience, AutomationBench) — top Index score justifies frontier; capped at 94 not 100 because AA notes behind on CritPt/AA-LCR/GDP.pdf.
- **Context window: 98/100.** 1M /128K (300K batch) tier 95-100; adaptive thinking enables long-horizon migrations (200K-line audit <3h vs Opus 20h); missing MRCR 98%+ at 512K+ prevents 100.
- **Multimodal: 75/100.** Text+image in → text out (Chartography 89.0% with tools, vs Fable 88.4) — +image tier 60-70 but Chartography strong vision pushes to 75; no video/audio in/out so below 80+.
- **Coding: 90/100.** Terminal-Bench 4.0 66.4% + FrontierCode 54.4% (beats Astra 53.3) + CursorBench 57.8% + Terminal-Science 58.7% form strong coding suite (frontier TB ~88% →90-100 threshold not cleared but near); capped at 90 because no DeepSWE 74%+ elite or LiveCode direct to push to 95.
- **Cost efficiency: 82/100.** $4/$20 down 20% from $5/$25, cache read $0.20 (95% discount vs input) + 50% Batch; vs $3/$15 ~60 and $0.60/$2.20 ~92 — mid-high premium flagship pricing but cheaper than Fable $10/$50 (~30) — scored 82.
- **Overall Score: 90/100.** Mean of five quality dims (92+94+98+75+90)/5=89.8 → 90. Best-fit: frontier coding/knowledge-work leader at Pareto-optimal cost — choose when agentic coding (TB 66%, Cursor 58%) and knowledge work Elo 1846 at $4/$20 beat prior frontier at 1/2 cost matters.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (anthropic.com Opus 5.5 launch page, platform.claude.com docs, Artificial Analysis Opus 5.5 Index, Layer3Labs/Lorphic benchmark summaries); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

