# Claude Mythos 5.2 — findings by Muse Glimmer 30B

- Source: Anthropic (`claude-mythos-5.2`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's restricted-access, safeguards-lifted variant of Claude Fable 5.2 for verified cybersecurity and biosecurity research. Same underlying weights as Fable 5.2 with cybersecurity/biology safeguards removed.
- **Provider / access:** Anthropic API, Cyber Verification Program and Life Sciences Verification Program vetted access only. Chat Completions compatible.
- **Release / knowledge:** 2026-11-09 release; knowledge cutoff June 2026 per system card.
- **IDs:** `anthropic/claude-mythos-5.2`
- **Context window:** 1,000,000 tokens input / 128,000 tokens output — confirmed by Anthropic announcement and system card.
- **Modalities:** Text + image in; text out. Reasoning enabled. Tool calls supported.
- **Pricing (as of 2026-11-11):** $8.00 per 1M input, $40.00 per 1M output for Fable/Mythos base mode; $16/$80 fast mode — Anthropic announcement 2026-11-09.
- **Architecture:** Proprietary. No open weights. Reasoning model.

### Raw benchmarks found

Agent / tool use:

- FrontierCode 2.0: **49.1%** Xhigh effort — Anthropic announcement 2026-11-09
- FrontierSWE v2: **69.9%** — Anthropic announcement 2026-11-09
- AutomationBench: **51.4%** — Anthropic announcement 2026-11-09
- Terminal-Bench-Science 0.1: **75.3%** Mythos 5.2 — Anthropic announcement 2026-11-09
- CyScenarioBench: **76.3%** Mythos 5.2 — Anthropic announcement 2026-11-09
- CVE Rediscovery: **89.6%** Mythos 5.2 — Anthropic announcement 2026-11-09
- WANDR relaxed score: **82.1%** — Anthropic announcement 2026-11-09
- OSWorld 2.1 offline partial: **89.3%** — Anthropic announcement 2026-11-09
- RoboDojo Sim: **64.9%** — Anthropic announcement 2026-11-09

Reasoning / knowledge:

- AA-Briefcase v1.1 rubric: **66.1%**, Elo **1785** — Anthropic announcement 2026-11-09
- Remote Labor Index high effort: **41.3%** — Anthropic announcement 2026-11-09
- Humanity’s Last Exam with tools: **74.2%** — Anthropic announcement 2026-11-09
- Chartography no tools: **73.4%** — Anthropic announcement 2026-11-09
- Protein design de novo binder design 24hr: **85.1** Mythos 5.2 — Anthropic announcement 2026-11-09

Coding:

- FrontierCode 2.0 Xhigh 49.1% as above; FrontierSWE v2 69.9% as above
- No verified public SWE-bench Verified / LiveCodeBench score published for Mythos 5.2

Long context:

- Context window 1M confirmed. No MRCR / RULER / GraphWalks public score found for Mythos 5.2.

### Normalized scores (1–100)

- **Tool use: 82/100.** FrontierCode 49.1% Xhigh, AutomationBench 51.4%, CyScenarioBench 76.3% and CVE Rediscovery 89.6% show strong agentic tool use, capped by absence of independent Toolathon/MCP-Atlas scores.
- **Reasoning: 73/100.** HLE 74.2% with tools, AA-Briefcase 66.1% rubric / 1785 Elo, Terminal-Bench-Science 75.3% indicate top-tier multidisciplinary reasoning; capped by no standalone GPQA Diamond/HLE-Diamond public numbers.
- **Context window: 95/100.** 1M input /128K output is highest commercial tier; no retrieval benchmark found to verify utilization quality.
- **Multimodal: 65/100.** Text + image input, text output. Vision input supported for documents/schematics; no audio/video.
- **Coding: 78/100.** FrontierSWE v2 69.9% and FrontierCode 49.1% Xhigh with OSWorld 89.3% demonstrate strong agentic coding; capped by lack of independent SWE-bench Verified/LiveCodeBench publication.
- **Cost efficiency: 30/100.** $8/$40 per 1M is premium pricing vs median; fast mode $16/$80 further reduces efficiency.
- **Overall Score: 79/100.** Mean of Tool 82, Reasoning 73, Context 95, Multimodal 65, Coding 78 = 78.6 → 79. Best-fit: restricted high-risk technical research with vetted access; not general-purpose.

---

## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-11-11
- Method: Public internet research, Anthropic official announcement and system card; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Anthropic — Claude Fable 5.2 and Mythos 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `Muse_Glimmer_30B.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Muse_Glimmer_30B.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Claude Mythos 5.2 — findings by Muse Glimmer 30B — SELF-EXCLUDED

- Source: Anthropic (`claude-mythos-5.2`)
- Archived date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's restricted security-vetted configuration of Fable 5.2 deployed with lifted dual-use refusals for verified defensive cyber and biosecurity research.
- **Provider / access:** Anthropic API, CVP/Glasswing vetted access only.
- **Release / knowledge:** 2026-11-09 release per meta.
- **IDs:** `anthropic/claude-mythos-5.2`
- **Context window:** 1M / 128K out
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-11-11):** Paid $10/$50 per 1M
- **Architecture:** Proprietary

#### Research notes

No verified public benchmark numbers found for `claude-mythos-5.2` in public sources as of 2026-11-11. Model is restricted-access and no independent evaluations published. Self-excluding per RULES.md.
