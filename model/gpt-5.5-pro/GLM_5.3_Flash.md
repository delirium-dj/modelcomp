# GPT 5.5 Pro — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** The maximum-accuracy variant of OpenAI's GPT-5.5 generation (Apr 2026) — a research-partner-class model for the hardest questions: BrowseComp state of the art (90.1%), HLE 43.1% without tools, ARC-AGI-2 84.2–84.6% (ARC Prize verified), FrontierMath Tiers 1–3 87.7%. Available in ChatGPT Pro/Business/Enterprise and the API (since Apr 24, 2026).
- **Provider / access:** OpenCode Zen `opencode/gpt-5.5-pro` via `https://opencode.ai/zen/v1/responses` (paid, $30/$180); OpenAI API `gpt-5.5-pro` (Responses + Chat Completions, batch/flex at half rate, priority processing at 2.5x). Base model is `gpt-5.5` — Pro is a distinct, slower, pricier variant.
- **Release / knowledge:** Released 2026-04-23 (OpenAI "Introducing GPT-5.5"; API from Apr 24, 2026); knowledge cutoff: not stated for Pro.
- **IDs:** `opencode/gpt-5.5-pro` (Zen, paid); `gpt-5.5-pro` (OpenAI API)
- **Context window:** 1,048,576 tokens per models.dev (family-verified); Artificial Analysis measures 922k for the (Xhigh) config; BenchLeader lists 1.1M. Max output: not stated for Pro.
- **Modalities:** Text and image in, text out; reasoning supported (xhigh-family evals); tool calling; structured outputs; computer use via Codex skills (family).
- **Pricing (as of 2026-10-09):** Paid — $30 / 1M input, $180 / 1M output (OpenAI; identical on Zen; blended $67.50/M per BenchLeader, cache read $30.00). Output speed ~15 tok/s (OpenRouter 7-day median; slowest quarter), first token ~3.4s.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed. High biological/chemical and cybersecurity capability under the Preparedness Framework v2 (GPT-5.5 family).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%** — new state of the art (OpenAI-reported, GPT-5.5 Pro)
- GDPval (wins or ties vs professionals): **82.3%** (OpenAI-reported)
- Investment Banking Modeling Tasks (internal): **88.6%** (OpenAI-reported)
- DTBench: **96.0%** (#22, Epoch AI Benchmarking Hub via BenchLeader, xhigh — harness identity unverified; cited as measured but not interpreted)
- Terminal-Bench 2.0: no verified public score found for Pro (— in the announcement table)
- Tau2-Bench Telecom: no verified public score found for Pro (—)
- MCP Atlas: no verified public score found for Pro (—)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- ARC-AGI-2 (verified): **84.6%** (#29) at high effort / **84.2%** (#32) at xhigh (ARC Prize leaderboard via BenchLeader, 2026-10-09 — fills the previously-missing ARC row)
- ARC-AGI-1: **96.5%** (#21) high / **95.0%** xhigh (ARC Prize via BenchLeader)
- SimpleBench: **76.9%** (#4, SimpleBench via Epoch AI Benchmarking Hub/BenchLeader)
- CritPt: **30.6%** (#13, Artificial Analysis via BenchLeader, xhigh — fills the previously-missing CritPt)
- LMCA: **53.9%** (#34, Epoch AI Benchmarking Hub via BenchLeader, xhigh — long-context external eval; fills the previously-missing LCR row)
- FrontierMath Tier 1–3: **87.7%** (#8, Epoch AI Benchmarking Hub v2 via BenchLeader — updates the April announcement's 52.4%)
- FrontierMath Tier 4: **78.0%** (#15, Epoch v2 via BenchLeader — updates the April announcement's 39.6%)
- HLE (no tools): **43.1%**; HLE (with tools): **57.2%** (OpenAI-reported)
- GeneBench: **33.2%** (OpenAI-reported)
- Epoch Capabilities Index: **162.1** (#8, Epoch AI Benchmarking Hub via BenchLeader)
- BenchLeader Index: **65.6 ±8.6** (#37 of 760, xhigh best; Reasoning 78, Maths 72 — BenchLeader's own normalization)
- GPQA Diamond: no verified public score found for Pro (—)
- Artificial Analysis Intelligence Index: no verified public score found (AA page for 5.5 Pro now exists but the Index row is not yet published — 26 of 697 class, N/A)

Coding:

- SWE-Bench Pro (Public): no verified public score found for Pro (—)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found
- DTBench 96.0% (above) is the only new measured coding-adjacent number; harness identity unverified

Long context:

- LMCA: **53.9%** (#34) at xhigh (Epoch AI Benchmarking Hub — the first Pro-specific long-context measurement found; gpt-5.5 base reports MRCR v2 8-needle 512K–1M at 74.0% and Graphwalks BFS 1M at 45.4% — family context only)

## Normalized scores (1–100)

- **Tool use: 89/100.** BrowseComp 90.1% state of the art plus GDPval 82.3% wins/ties (near the methodology's GDPval ~1750+ → 90–100 frontier reference) and internal IB modeling 88.6%; DTBench 96.0% (#22) is a measured point but its harness identity is unverified; capped by missing Terminal-Bench/Tau2 numbers for the Pro variant itself.
- **Reasoning: 92/100.** ARC-AGI-2 84.2–84.6% verified (ARC Prize — the strongest new evidence), SimpleBench 76.9% (#4), FrontierMath Tiers 1–3 87.7% (#8) and CritPt 30.6% (#13) corroborate frontier research-level reasoning; HLE 43.1% (no tools) clears the 40%+ frontier reference; GPQA not run for Pro.
- **Context window: 94/100.** 1,048,576 tokens per models.dev (≥1M band); AA measures 922k for the Xhigh config — 500K–1M band top (85–94); LMCA 53.9% is the first Pro long-context measurement, well below the ≥98% bar for 100.
- **Multimodal: 65/100.** Text + image input, text output only → 60–70 band; no Pro-specific vision evals were run.
- **Coding: 68/100.** Zero verified coding benchmarks under a verified harness for the Pro variant (SWE-Bench Pro and Terminal-Bench 2.0 are "—" in the announcement table); DTBench 96.0% is promising but its harness identity is unverified, so a higher score stays unproven — capped by absence of same-variant evidence.
- **Cost efficiency: 12/100.** $30/$180 per 1M tokens (blended $67.50/M, BenchLeader) — the extreme end, well beyond the $10/$50 = ~30 methodology reference; only justified when maximum accuracy matters.
- **Overall Score: 82/100.** Mean of the five quality dims (89 + 92 + 94 + 65 + 68) / 5 = 81.6 → 82. Best fit: maximum-accuracy research, deep knowledge work, and hard agentic browsing where budget is secondary — overkill for routine coding or cost-sensitive work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (BenchLeader model page data as of 2026-10-09, Artificial Analysis 5.5 Pro page, official OpenAI GPT-5.5 announcement, OpenCode Zen docs cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds ARC-AGI-1/2 verified, SimpleBench, CritPt, LMCA, FrontierMath Epoch v2 updates, measured 922K context — Context 93→94, Overall 81→82.
- Future sources: add a new file next to this one, e.g. `GPT_5.6.md`, using the same headings.
