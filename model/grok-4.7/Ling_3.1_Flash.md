# Grok 4.7 — findings by Ling 3.1 Flash

- Source: SpaceXAI (`opencode/grok-4.7`; API `grok-4.7`; Grok API, Cursor, Grok Build, routers and clouds)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI's September-2026 flagship for long-running coding and knowledge work — DeepSWE v1.1 71.0% (high), CursorBench 4.0 46.3%, AA Briefcase v1.1 1,657, HLE 43.1%, SciCode 57.4%, with a 500K context at $2/$6 per 1M below 200K; a larger new base model (reported 2.1T parameters, unconfirmed) with a longer RL run weighted toward multi-hour tasks.
- **Provider / access:** SpaceXAI (xAI) — Grok API, Cursor, Grok Build (free trial), third-party coding harnesses, model routers and cloud platforms; reasoning effort low/medium/high (default)/xhigh; `noFreeId`.
- **Release / knowledge:** 2026-09-21; knowledge cutoff not published.
- **IDs:** `opencode/grok-4.7` / `grok-4.7`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 500K-token window and takes text and image input.
- **Context window:** 500,000 tokens.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $2.00/$6.00 per 1M input/output below 200K prompt tokens; at 200K+ the higher $4/$12 rate applies to the whole request; cache read $0.50/M (25% of input); web search $5.00/1K calls; Batch API not supported; a fast variant runs at 2× output speed for 2× price; 78 tok/s median, 30.92s TTFT (AA, xhigh).
- **Architecture:** proprietary; new larger base than Grok 4.6 (reported 2.1T parameters — xAI has not published it; Grok 4.6 was a post-training upgrade on the 1.5T V9 foundation); longer RL run on multi-hour tasks; natively understands the Grok Bot harness; new safeguard stack (strong jailbreak resistance, low refusal on legitimate cybersecurity/biology work — LatchBio biosafety 62.4%, HackerBench v0.3 3.3% risky dual-use pass-through).

### Raw benchmarks found

Agent / tool use (xAI launch table, Grok 4.7 xhigh vs Grok 4.6 high / GPT-5.6 Sol max / Fable 5.1 max):

- CursorBench 4.0 (long-running coding): **46.3%** (vs 40.4% / 41.7% / 51.8%) — frontier price-performance per xAI
- DeepSWE v1.1: **71.0%** (*high effort*; vs 65.2% / 72.7% / 70.0%)
- AA Briefcase v1.1 (multi-hour office work): **1,657** (vs 1,546 / 1,487 / 1,678)
- Terminal-Bench 4.0 (multi-hour terminal work): **38.0%** vendor-reported (vs 20.3% / 37.3% / 57.9%); **28.3** independently (TensorFeed, 66-task all-or-nothing harness)
- Harvey Legal Agent Benchmark: **19.6%** (vs 15.8% / 2.5% / 6.7%) — best in table
- HealthBench Professional (clinical reasoning): **56.7%** (vs 48.5% / 60.5% / 62.1%)
- EEBench (electrical engineering): **64.0%** (vs 53.0% / 39.4% / 56.4%) — best in table
- LatchBio biosafety: **62.4%** (tops that evaluation, per xAI)

Independent (Artificial Analysis, xhigh effort unless noted):

- AA Intelligence Index: **46.3–46.4** (twelve points behind the leader; a newer, harder Index version than Grok 4.6's 61 — not cross-comparable)
- HLE: **43.1%**
- AA-LCR (long-context retrieval): **76.7%**
- GDPval-AA: **59.8%**; CritPt: **17.7%**; SciCode: **57.4%**
- AA-Omniscience: accuracy **47.4%**, non-hallucination **70.7%**
- Vals Index: **60.22%** (10th of field)
- LMArena Text: **1397 Elo** (xhigh); LMArena WebDev: **1638** (xhigh)
- Design Arena Elo: dataviz 1235, gamedev 1302, UI component 1228, website 1239

Reasoning / knowledge (beyond the above):

- GPQA Diamond, FrontierMath, ARC-AGI-2, AIME: no verified public score found

Coding (beyond the above):

- SWE-bench Verified / SWE-bench Pro, LiveCodeBench, Terminal-Bench 2.1, AA Coding Index: no verified public score found

Long context / multimodal:

- AA-LCR 76.7% (above); no MRCR/RULER figure published; no MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 75/100.** DeepSWE v1.1 71.0% (high) nears the ~74% frontier bar, AA Briefcase v1.1 1,657 nearly matches Fable 5.1 (1,678), and CursorBench 4.0 46.3%, EEBench 64.0% and Harvey Legal 19.6% lead their launch table; Terminal-Bench 4.0 at 38.0% vendor-reported (28.3% independent) trails Fable 5.1's 57.9%, and the AA Intelligence Index of 46.4 sits twelve points behind the leader.
- **Reasoning: 74/100.** HLE 43.1% (xhigh) reaches the 40%+ frontier band, with Vals Index 60.22% (10th) and AA-Omniscience non-hallucination 70.7% supporting; CritPt 17.7% and the AA Intelligence Index of 46.4 cap the score, and no GPQA Diamond figure was published.
- **Context window: 80/100.** 500K-token window with AA-LCR 76.7%; no ≥98%-at-depth retrieval figure, so it stays below the 1M/95+ band.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); no MMMU figure captured.
- **Coding: 75/100.** DeepSWE v1.1 71.0% (high) sits just under the ~74% frontier bar while matching Fable 5.1 max (70.0%), CursorBench 4.0 46.3% is second only to Fable's 51.8%, and SciCode 57.4% clears the 55% reference; SWE-bench Verified/Pro, LiveCodeBench, Terminal-Bench 2.1 and the AA Coding Index are unpublished, and independent Terminal-Bench 4.0 is 28.3%.
- **Cost efficiency: 84/100.** $2/$6 per 1M below 200K (blended ~$3.00/M at 3:1) sits just under the ~$1.25/$4.25≈88 anchor; 200K+ prompts double the entire request ($4/$12), cache reads are 25% of input, the Batch API is unsupported, and the fast variant costs 2×.
- **Overall Score: 74/100.** (75+74+80+65+75)/5 = 73.8 → 74 — a frontier-adjacent September-2026 agent (DeepSWE 71.0%, SciCode 57.4%, HLE 43.1%, AA Briefcase 1,657 at $2/$6) held back by Terminal-Bench 4.0 (28.3% independent), a 500K (not 1M) window and an AA Intelligence Index twelve points off the lead.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (SpaceXAI Grok 4.7 launch, llm.ing, OpenRouter, TensorFeed, PromptBlueprints); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_7.md`, using the same headings.
