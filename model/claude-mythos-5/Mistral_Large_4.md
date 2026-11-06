# Claude Mythos 5 — findings by Mistral Large 4

- Source: Anthropic (`claude-mythos-5`, restricted)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's restricted Mythos-class model — same underlying engine as Claude Fable 5 with cyber/biology safeguards lifted, reserved for ~150 vetted organizations (Project Glasswing lineage since April 2026); now running vulnerability scans in Claude Security for Enterprise (announced 2026-08-21, with a $35M open-source security fund). Variant note: NOT a separate model from Fable 5 — one set of weights, two safeguard configurations; successor Mythos 5.1 (2026-09-01).
- **Provider / access:** Not publicly available — Project Glasswing / vetted US orgs via Cyber Verification Program (access restored 2026-06-26 after a 2026-06-12 export-control pause); enterprise security tooling. No public API price list.
- **Release / knowledge:** Announced June 2026 alongside Fable 5 (sources give 2026-06-09 and 2026-06-22 — conflict noted); second Mythos generation after Mythos Preview (2026-04-07).
- **IDs:** restricted API routes for vetted orgs; no public ID.
- **Context window:** 1,000,000 tokens (BenchLM profile).
- **Modalities:** Text + image in, PDF in, text out; reasoning; tool calls (Claude 5 family).
- **Pricing (as of 2026-11-05):** No public price; one source reports $10/M for Mythos 5 (Yellow, single-source — flagged); lineage: Mythos Preview participant pricing $25/$125 per 1M (llm-stats, labelled Preview).
- **Architecture:** Proprietary; Mythos-class, above the Opus tier; found thousands of zero-day vulnerabilities across major OSes/browsers (Preview lineage, llm-stats).

### Raw benchmarks found

Official news/system card cross-checked against BenchmarkList, BenchLM, NxCode, llm-stats, DataCamp, Wikipedia, Unite.AI; lineage figures labelled:

Agent / tool use:

- ProgramBench (Anthropic harness): **93.0%** (BenchmarkList, Mythos 5)
- Terminal-Bench 2.1: **88.0%** (rank 14/193) (BenchmarkList, Mythos 5)
- CyberGym: **83%** (lineage: Mythos Preview, 2026-04) (llm-stats); thousands of zero-days found (lineage)
- Claw-Eval / OSWorld / AutomationBench: no verified public score found for mythos-5

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (NxCode, Preview-lineage) / 94.6% (Preview) — lineage-labelled
- HLE with tools: **64.7%** (NxCode, Preview-lineage)
- USAMO 2026: **97.6%** (NxCode, Preview-lineage; Opus 4.6 42.3%, GPT-5.4 95.2%)
- No public AA Index score (restricted); ECI lineage 163 applies to the Fable twin

Coding:

- SWE-bench Verified: **95.5%** (rank 2/53) (BenchmarkList, Mythos 5) vs 93.9% (Preview lineage) — both cited
- SWE-bench Pro: **80.3%** (rank 4/58); SWE-bench Multilingual: **92.2%** (rank 2/49) (BenchmarkList)

Long context:

- 1M window; no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 90/100.** ProgramBench 93.0% and unmatched cyber capability (lineage-labelled zero-day finds); no public agent-benchmark rows beyond that.
- **Reasoning: 91/100.** GPQA ~94.5%, HLE-tools 64.7%, USAMO 97.6% (all Preview-lineage labelled) — top-tier but not Mythos-5-published.
- **Context window: 96/100.** 1M family window; no verified 512K+ retrieval for this ID.
- **Multimodal: 85/100.** Text/image/PDF in, text out (Fable twin family); no audio/video or non-text output.
- **Coding: 94/100.** SWE-V 95.5%, SWE-Pro 80.3%, TB 2.1 88.0% — frontier, second only to Opus 5's 97% on the Vals board.
- **Cost efficiency: 20/100.** Restricted access, no public price; $10/M single-source claim and $25/$125 Preview lineage — invite-only premium.
- **Overall Score: 91/100.** Half-up mean of (90 + 91 + 96 + 85 + 94) / 5 = 91.2 → 91. Best fit: vetted cyber-defense and security-tooling work only; general users get the Fable 5 twin.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches, official Anthropic news cited, 2026-11-05 UTC); cross-checked against BenchmarkList, BenchLM, NxCode, llm-stats, DataCamp, Wikipedia, Unite.AI, techjacksolutions, Yellow; conflicts (release 06-09 vs 06-22; SWE-V 95.5 vs 93.9 lineage; pricing $10/M vs $25/$125 lineage) listed side by side; lineage figures labelled, never merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5 and Claude Mythos 5 — Anthropic news (official, June 2026)](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Project Glasswing — Anthropic](https://www.anthropic.com/glasswing)
  - [BenchmarkList — anthropic-claude-mythos-5 (SWE-V 95.5%, SWE-Pro 80.3%, TB 2.1 88.0%, ProgramBench 93.0%)](https://benchmarklist.com/models/anthropic-claude-mythos-5/)
  - [BenchLM — claude-mythos-5 (1M ctx, restricted profile)](https://benchlm.ai/models/claude-mythos-5)
  - [llm-stats — Mythos Preview launch (SWE-V 93.9%, GPQA 94.6%, CyberGym 83%, $25/$125 — lineage)](https://llm-stats.com/blog/research/claude-mythos-preview-launch)
  - [NxCode — Mythos benchmarks (USAMO 97.6%, GPQA 94.5%, HLE-tools 64.7% — Preview lineage)](https://www.nxcode.io/resources/news/claude-mythos-benchmarks-93-swe-bench-every-record-broken-2026)
  - [Unite.AI — Mythos 5 in Claude Security for Enterprise, $35M fund (2026-08-21)](https://www.unite.ai/anthropic-deploys-claude-mythos-5-in-security-tools-35m-open-source-fund/)
  - [techjacksolutions — Mythos 5 guide (Fable 5 twin, 150 vetted orgs, ASL-3)](https://techjacksolutions.com/ai-tools/anthropic-claude/claude-mythos-5-explained/)
  - [tessgroup — Fable vs Opus vs Mythos explained (same weights, safeguards split)](https://tessgroup.co.uk/blog/claude-fable-opus-mythos-explained-uk-employers)
  - [DataCamp — Claude Mythos 5 blog](https://www.datacamp.com/blog/claude-mythos-5)
  - [Wikipedia — Claude Mythos (release history, restricted access)](https://en.wikipedia.org/wiki/Claude_Mythos)
