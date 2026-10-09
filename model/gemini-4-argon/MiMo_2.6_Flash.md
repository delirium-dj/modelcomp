# Gemini 4 Argon — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-4-argon` — no public API ID published yet)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's first Gemini 4-generation frontier model (announced 2026-09-30) for long-horizon software engineering, enterprise knowledge work (legal/finance), and cybersecurity defense — headline feature is an industry-leading 1M-token **output** limit (up from 64K). Not a variant/alias; the new Gemini 4 flagship line.
- **Provider / access:** **restricted** — rolling out to trusted cyber defenders via the Fairwind Program + US government evaluators; next stage is paid Gemini API customers and Google AI Ultra subscribers, no date published. **No official public API model ID exists yet** (do not code against `gemini-4-argon`).
- **Release / knowledge:** announced 2026-09-30; knowledge cutoff not published; model card not yet released.
- **IDs:** none published (no native/gateway ID confirmed as of 2026-10-07).
- **Context window:** input context window **not published** by Google (the circulating "2M context" has no primary source). Evidence: Google ran GraphWalks over 256K–1M bands, and Vals lists 1M — treat input as ~1M-unverified. **Max output: 1,000,000 tokens** (up from 64K); Vals max-output listing 262,144 for its harness.
- **Modalities:** text, image, video, file input (Vals model page); text out; reasoning yes (effort levels not officially documented; evals ran "high"/max thinking); tool calls yes (Antigravity harness, computer use). LVBench long-video SOTA suggests strong video input.
- **Pricing (as of 2026-10-07):** **introductory** $2 in / $10 out per 1M, cached input 95% off ($0.10); after the introductory period → **$4 / $20** (cache $0.20). End date unpublished — budget at $4/$20. AA measures $1.99 per Intelligence Index task at intro pricing (60% of GPT-6 Astra's $3.26) but Argon is verbose (~62K output tokens/task vs Astra's 27K).
- **Architecture:** proprietary (parameters undisclosed; no model card yet).

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **51.3%** (Google chart, Zapier — rank #1) / **77.5–78%** (Artificial Analysis' own AutomationBench harness, 7 pts ahead of Sonnet 5.5) — harness divergence, both listed.
- Terminal-Bench 4.0: **57.4%** (Google) / **57.0–57.58%** (AA, vals.ai rank 5/44) — behind Claude Opus 5.5's 66.4%.
- GDPval-AA v2.1: **1611** Elo (Artificial Analysis, independent; Opus 5.5 1846, GPT-6 Astra 1542).
- AA-Briefcase: **65%** rubric pass rate — highest AA has recorded (analysis/presentation marks lower).
- OSWorld 2.0 (offline subset): **69.2%** (Google, best-of-three runs; GPT-6 Astra 72.6%).
- Tau3/Tau2 / Claw-Eval / Toolathon / MCP-Atlas / OSWorld full: no verified public score found.

Reasoning / knowledge:

- HLE: **57%** (Artificial Analysis, independent; Opus 5.5 61%, Astra 55%).
- Artificial Analysis Intelligence Index v4.3: **52.6–53** (high effort; Opus 5.5 57.6, Astra 52.7, GPT-6.1 Sol 51.8).
- Hallucination rate: **15%** (AA) vs 51% for GPT-6 Astra.
- GPQA Diamond / LCR / CritPt / ARC-AGI: no verified public score found.
- Domain: Vals Index **68.9%** (#1 of 44), Vals Finance Agent v2 **65.4%** (#1/75), Harvey Legal Agent **19.6%**, LABBench 2 88.8%, RiemannBench 76.0%, PostTrainBench 45.3%.

Coding:

- DeepSWE v1.1: **77.9%** (Google, mini-swe agent, highest thinking — new SOTA; vs Astra 74.1%, Opus 5.5 74.2%).
- Vibe Code Bench: **91.9%**; FrontierSWE v2: **55.0%** (trails Astra 65.5%).
- SciCode: **62%** (Artificial Analysis, independent).
- Terminal-Bench-Science 0.1: **57.6%** (Google, 6× verifier timeout — trails Astra 68.1%).
- CWE-bench v1: **68.0%** (tie for first, pass@4 75%).
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public score found.

Long context:

- GraphWalks BFS (F1): **99.7%** up to 128K; **84.2%** in the 256K–1M band (vs Astra 71.8%, Opus 5.5 66.8%) — Google ran all models itself.

### Normalized scores (1–100)

- **Tool use: 84/100.** AutomationBench 51.3 (Google #1) / 78 (AA harness), OSWorld 69.2% and TB4.0 57.4% are solid but behind leaders, and GDPval-AA 1611 sits above the mid band yet below the 1750 frontier ref — caps it at 84.
- **Reasoning: 86/100.** HLE 57% clears the 40% frontier ref and the 15%-hallucination rate is class-leading, but AA Intelligence Index 52.6 falls short of the 60+ frontier ref and GPQA is unpublished.
- **Context window: 90/100.** Input window is unpublished; GraphWalks at 84.2% in the 256K–1M band proves real ~1M-input capability well above the mid tier, but 84.2% is far under the ≥98%-retrieval bar for 100 and the spec itself is unverified — scored on evidence, not rumor.
- **Multimodal: 88/100.** Text/image/video/file in with text out, plus SOTA long-video understanding (LVBench 91.7%) — video-in band is 75–90; audio input unverified and no non-text output keeps it under 90.
- **Coding: 93/100.** DeepSWE 77.9% is a new SOTA (74%+ ref cleared), Vibe 91.9%, SciCode 62% (55%+ ref), CWE-bench tie-first; capped at 93 by FrontierSWE v2 55.0% and TB-Science trailing Astra, plus no SWE-bench Verified/LiveCodeBench rows.
- **Cost efficiency: 72/100.** Intro $2/$10 with $0.10 cache reads is between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors (~75), pulled to 72 by the unpublished intro end date (list is $4/$20), heavy verbosity (~62K output tokens/task), and restricted availability.
- **Overall Score: 88/100.** (84+86+90+88+93)/5 = 88.2 → 88 — best-fit frontier pick for legal/finance/long-video/very-long-context agentic work once access opens; today it is Fairwind-gated with no public endpoint.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Google DeepMind announcement + press release, vals.ai, Artificial Analysis via AI Model Waddle/IAMag, Valletta Software, Endue deep-dive); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Gemini 4 Argon — findings by Mimo v2.6 Flash

- Source: Google DeepMind / Gemini 4 Argon
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (Google's Gemini 4 flagship; successor line to the Gemini 3 Pro tier)
- **Short description:** Google DeepMind's frontier model for long-horizon reasoning across real-world software engineering, enterprise knowledge work (finance, legal) and defensive cybersecurity. Announced 2026-09-30 and rolled out in phases through the Fairwind Program to trusted cyber defenders first, then paid API customers and Google AI Ultra subscribers. Directly replaces the cancelled Gemini 3.5 Pro in Google's lineup.
- **Provider / access:** Google AI / Gemini API (paid API customers at rollout; staged availability), Google AI Ultra, Fairwind Program for cyber defenders. Not a free-tier model as of 2026-10-01.
- **Release / knowledge:** 2026-09-30 (Google blog + CNBC). Knowledge cutoff not published.
- **IDs:** Google API model id for Gemini 4 Argon (announced; exact API string not yet confirmed in public docs). No OpenCode Zen Free ID found — paid only.
- **Context window:** 1M tokens input (Vals AI model page); **max output 1M tokens** per Google ("industry-leading, up from 64K") — Vals's harness capped max output at 262,144, so the shipped cap may be tier-dependent; treat 1M output as the stated product limit.
- **Modalities:** text, image, video and file input → text out (Vals AI); reasoning with effort tiers; tool calls; no audio path claimed. Long-video understanding demonstrated at SOTA (LVBench 91.7%).
- **Pricing (as of 2026-10-01):** introductory **$2.00 in / $10.00 out per 1M**, cached input 95% off input price; after the introductory period **$4.00 / $20.00 per 1M**. Paid; no free tier.
- **Architecture:** proprietary (no parameter disclosure).

### Raw benchmarks found

Agent / tool use:

- Vals Index (economic-impact composite, finance/coding/legal/tax): **68.90% ±0.97, #1 of 41** at $15.68/test (Vals AI, independent run, 2026-09-30) — ahead of Claude Sonnet 5.5 (67.04), Claude Opus 5.5 (66.97), Claude Fable 5.1 (65.83)
- AutomationBench (Zapier, end-to-end business workflows): **51.3%, #1** (Google)
- Terminal-Bench 4.0: **57.58% ±2.31, #5 of 42** (Vals)
- Terminal-Bench Science: **44.29% ±5.98, #3 of 34** (Vals)
- SRE Bench: **44.27% ±3.08, #3 of 16** (Vals)
- CyberBench v1.1: **77.86% ±5.30, #2 of 43** (0.12 pts behind GPT-6 Sol) (Vals)
- CWE-bench v1 (vulnerability remediation): **68%, tie for #1** (Google)
- Finance Agent v2: **65.40% ±0.32, #1 of 73** (Vals)
- Tax Agent Bench: **76.23% ±2.87, #2 of 64** (Vals)
- Harvey's Legal Agent Benchmark: **19.58% ±3.31, #5 of 73** (Vals)
- CUA-bench (computer use): **4.83%, #7 of 8** (Vals) — weak spot
- GDPval-AA / Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- ProofBench v1.1: **99.00% ±1.00, #5 of 44** (Vals)
- BioMysteryBench: **76.30% ±0.37, #6 of 21**; MysteryMechanism: **45.49% ±3.35, #6 of 21** (Vals)
- LegalBench: **88.30% ±0.37, #3 of 149** (Vals)
- MedCode: **58.80% ±2.10, #3 of 104**; MedScribe: **87.43% ±1.96, #15 of 106** (Vals)
- SAGE: **53.65% ±3.38, #5 of 90**; Public Benefits Bench: **69.76%, #5 of 45**; ProgramBench: **2.50%, #5 of 54** (Vals)
- GPQA Diamond / HLE / MMLU-Pro / ARC-AGI / AA Intelligence Index: no verified public score found (model announced 2026-09-30; independent academic runs not yet published)

Coding:

- DeepSWE v1.1: **77.9%, new state of the art** (Google, 2026-09-30)
- Vibe Code Bench v1.1: **91.91% ±1.90, #2 of 106** (behind Claude Sonnet 5.5 at 92.39) (Vals)
- IOI: **100.00%, tie #1 of 38** with GPT-6 Astra (Vals)
- Code Migration: **68.17% ±4.35, #2 of 71** (Vals)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public score found for this ID

Long context / multimodal:

- LVBench (long video understanding): **91.7%, state of the art** (Google)
- MRCR / RULER / GraphWalks: no long-context retrieval reported (1M input claimed by Vals; no measured retrieval-at-length result found)
- EMB: **75.24% ±2.46, #4 of 69** (Vals)

### Normalized scores (1–100)

- **Tool use: 87/100.** #1 on Vals Index and AutomationBench 51.3%, #1 on Finance Agent v2, plus Terminal-Bench 4.0 57.58% and CyberBench 77.86% put it in the frontier band (methodology: GDPval-class anchors); capped below 90 by CUA-bench 4.83% (#7 of 8) showing weak desktop computer use, by Terminal-Bench Science 44.29% trailing the 57–68% class, and by no GDPval-AA/τ3 row.
- **Reasoning: 88/100.** A #1-of-41 Vals Index finish, 99% ProofBench, 88.3 LegalBench and the cross-domain sweeps show frontier knowledge-work reasoning; capped because GPQA Diamond, HLE and ARC-AGI numbers do not exist yet for a model announced one day ago, and ProgramBench 2.5% / Harvey's 19.58% show sharp domain drop-offs.
- **Context window: 95/100.** 1M input tokens maps to the ≥1M tier (95–100); held out of 100 because no ≥98% retrieval-at-512K+ measurement (MRCR/RULER) is published, and the 1M output claim (Google) is contradicted in practice by Vals's 262K harness cap.
- **Multimodal: 88/100.** Text, image, video and file input with SOTA long-video understanding (LVBench 91.7%) sits at the top of the "+video/PDF in = 75–90" band; capped below 90 because no audio input is claimed (that alone reaches 90–100) and output is text-only.
- **Coding: 94/100.** New SOTA on DeepSWE v1.1 (77.9%), IOI 100% (#1 tie), Vibe Code Bench 91.91% (#2) and Code Migration #2 — top-of-field agentic coding; capped only by the absence of SWE-bench Verified / SWE-bench Pro / LiveCodeBench rows for this ID.
- **Cost efficiency: 66/100.** The $2/$10 introductory price with 95%-off cached input is mid-tier value for #1-ranked performance, but the standard $4/$20 rate lands near the ~$3/$15 anchor (~60), there is no free tier, and access is still restricted (Fairwind / paid API / AI Ultra).
- **Overall Score: 90.4/100.** (87+88+95+88+94)/5 = 90.4 — best-fit recommendation: the current pick for long-horizon enterprise agentic work (code migration, finance/legal research, defensive security) where maximum sustained output and cross-domain tool use matter; keep a cheaper flash-class model for computer-use GUI tasks until CUA-bench-class numbers improve.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-01
- Method: Public internet research (Google DeepMind announcement, Vals AI independent benchmark run, CNBC, 9to5Google, Android Authority, cwe-bench.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

