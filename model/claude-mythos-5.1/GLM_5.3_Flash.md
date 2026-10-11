# Claude Mythos 5.1 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-mythos-5-1` — Project Glasswing trusted access)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Discovered during Claude Fable 5.1 research (Step 2, dynamic discovery): Anthropic's gated twin of Fable 5.1 carries its own product ID, access program and cyber benchmark rows but had no folder. Appended at queue end.

## Model card

- **Name:** Claude Mythos 5.1 (same model as Fable 5.1; safeguards lifted for verified organizations; no Free tier)
- **Short description:** The trusted-access twin of Claude Fable 5.1 — identical model with select safeguards lifted for vetted cybersecurity and life-sciences users, enabling defensive vulnerability work the GA model declines. Powers Anthropic's Claude Security product; available only through Anthropic's verification programs.
- **Provider / access:** Claude API (`claude-mythos-5-1`) — approved organizations only, via Anthropic's verification programs such as the Cyber Verification Program (and life-sciences equivalent); EU legal entities can apply since September 11, 2026. Bedrock `anthropic.claude-mythos-5-1`, Google Cloud `claude-mythos-5-1`, Microsoft Foundry `claude-mythos-5-1` (all verified on the platform docs model page, 2026-10-11). Powers Claude Security. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released September 1, 2026 (platform docs, verified 2026-10-11; retirement not sooner than Sept 1, 2027). Reliable knowledge cutoff June 2026, training data cutoff June 2026 (same as Fable 5.1).
- **IDs:** `claude-mythos-5-1` (predecessors: Claude Mythos 5, Claude Mythos Preview).
- **Context window:** 1,000,000 tokens / 128,000 max output — **now verified on the Anthropic platform docs model page** (no longer inherited-only inference).
- **Modalities:** Text and images in → text out (docs capabilities table); thinking adaptive, always on; effort low–max, default `high`. Expanded offensive-cyber capability surface (exploit development permitted for vetted defenders) is the headline difference; refusal/fallback behavior documented in the build docs.
- **Pricing (as of 2026-10-11):** **Public rate card now verified on the platform docs: $10.00 in / $50.00 out per 1M — identical to Fable 5.1** (resolves the "no public rate card, presumed $10/$50 unverified" flag from the 2026-10-08 pass). Cache reads $0.25 (2.5% of base input — every other Claude model is 5–10%), cache writes $12.50 (5-min) / $20 (1-hr), Batch 50% off.
- **Architecture:** Proprietary, closed weights; identical weights to Fable 5.1 ("the same model but with different levels of safeguards" per Anthropic; joint system card covers both).

### Raw benchmarks found

- Public evidence for Mythos 5.1 remains minimal by design: BenchLM (updated 2026-10-10) lists just **one** displayable row — Terminal-Bench 4.0: **60.9%** (Anthropic Fable 5.1 & Mythos 5.1 joint system card) — and assigns **no public overall score (unranked)**, consistent with AA being unable to access the gated deployment.
- Terminal-Bench 4.0: **60.9%** (joint system card via benchlm.ai, verified again 2026-10-11) — top of Anthropic's agentic-coding table, +5.1 pts over Fable 5.1's 55.8%, +18.9 over Mythos 5's 42.0%; vendor-run, no independent measurement exists.

Reasoning / knowledge (Fable-5.1 weights, published rows):

- HLE (with tools): **65.0%** (#1 at publication); GPQA Diamond: **93.7%**; ARC-AGI-2: **90.0%**; AA Intelligence Index: **53** on v4.3.2 (#5/227, 2026-10-11 re-read; the 65.7 v4.2 #1 is historical); AA-LCR: **85.3%** (AA, updated); MLCR-AA: **71.1%**

Agent / tool use (Fable-5.1 weights + security-specific rows):

- GDPval-AA: **1758** (AA leaderboard, 2026-10-10) — the 1741–1853 spread across xAI/BenchmarkList/AA readings is harness variance on the shared weights
- AA-Briefcase: **1675 Elo** (AA); AA Agentic Index: **58.0%**; AA Harvey LAB: **93.0%**; Toolathlon-Verified: **77.8%**
- CyberGym (final-submission): **83.8%** (Google's Gemini 3.8 Flash Cyber comparison table — behind GPT-5.5-Cyber 85.6%; harness owned by Google)
- APEX-Agents: **59.2%**; APEX-SWE: **58.8%**; Terminal-Bench v3.0: **34.1%** (xAI table, Fable-5 weights)
- Distinct capability: exploit development and vulnerability patching workflows that GA Fable declines (Anthropic framing; ExploitBench-class rows not published for 5.1)

Coding (Fable-5.1 weights):

- SWE-bench Pro: **81.2%**; SciCode: **63.1%** (AA, updated); DeepSWE 1.1: **67.4%**; FrontierCode 1.1 Extended: **63.6%**; LiveCodeBench: **90.5%** (Vals); AA Coding Index: **81.6%** (AA, best measured in this repo)
- SWE-bench Verified: **93.9%** — logged against "Claude Mythos Preview" on the LLMReference SWE-V ladder (predecessor weights; treat as indicative, not 5.1-verified)

Long context:

- 1M window (docs-verified); AA-LCR **85.3%** (AA, updated — best measured in this repo, Fable-5.1 weights)

### Normalized scores (1–100)

- **Tool use: 93/100.** Fable-5.1-weight rows (GDPval 1758 AA / up to 1853 elsewhere, Briefcase 1675, Harvey 93.0%) plus the CyberGym 83.8% security-agent evidence, permissive cyber surface, and the TB4.0 60.9% top-of-Anthropic-table result — capped by Google-harness provenance on the cyber rows and the single-benchmark public disclosure for 5.1.
- **Reasoning: 94/100.** Identical weights to Fable 5.1: HLE 65.0%, GPQA 93.7%, ARC-AGI-2 90.0%, AA-LCR 85.3%, Index 53 (#5/227) — unchanged; the updated AA rows match the Fable 5.1 second-pass evidence exactly.
- **Context window: 95/100.** 1M window now docs-verified with 85.3% AA-LCR (Fable-5.1 evidence, updated); MRCR-at-depth still unverified for the gated deployment.
- **Multimodal: 82/100.** Text+images in / text out per the docs capabilities table; Fable-5.1-class grounded-vision rows.
- **Coding: 93/100.** SWE-Pro 81.2%, SciCode 63.1%, AA Coding Index 81.6% and LiveCodeBench 90.5% on the shared weights, with SWE-V 93.9% corroboration from the Mythos Preview ladder; exploit-development capability adds a defensive-coding dimension Fable cannot ship.
- **Cost efficiency: 30/100.** Rate card now verified at Fable-5.1-class $10/$50 per 1M (the prior "presumed, unverified" flag is resolved — the anchor was right); 2.5% cache reads help long-agent loops. No free tier; verification-program approval required.
- **Overall Score: 91.4/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (93 + 94 + 95 + 82 + 93) / 5 = 457/5 = 91.4 — unchanged on the 2026-10-11 second pass: the official docs verification (pricing, context, platform IDs) removes the last unverified flags rather than moving scores, and BenchLM's continued unranked status confirms no new public benchmark rows exist. Best fit: vetted defensive-security and life-science teams that need Fable-5.1-class reasoning with the safety envelope lifted — unobtainable without verification-program approval.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: platform.claude.com mythos-5-1 model page + models overview, benchlm.ai updated 2026-10-10 citing the joint Fable 5.1 & Mythos 5.1 system card, AA leaderboards for the shared-weight rows via the Fable 5.1 second pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
