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
