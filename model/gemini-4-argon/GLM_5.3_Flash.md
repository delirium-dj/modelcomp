# Gemini 4 Argon (High) — findings by GLM 5.3 Flash

- Source: Google / Google DeepMind (`gemini-4-argon`, reasoning effort "high")
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (High)
- **Short description:** Google DeepMind's frontier model and first Gemini 4 release, announced 2026-09-30 by Koray Kavukcuoglu: built to sustain deep reasoning across complex, long-horizon workflows (real-world software engineering, enterprise knowledge work, cyber defense). Gated at launch — unrestricted (guardrail-free) access goes first to Fairwind Program cyber defenders (Wiz is the named participant, via Scan for Good); paid API and Google AI Ultra to follow; in the U.S. government's voluntary pre-release access process.
- **Provider / access:** Google API (1 provider per Artificial Analysis); no published API model ID as of 2026-10-09 (not in OpenRouter, models.dev, Vertex AI, Gemini CLI, Cursor, or Copilot docs per DataCamp); refuses cyberattack/CBRN requests for general users; Fairwind cohort gets guardrail-free defensive capability.
- **Release / knowledge:** Released 2026-09-30; knowledge cutoff not disclosed.
- **IDs:** `google/gemini-4-argon` (high effort; state explicitly: no Free ID exists on Zen — access is gated/paid, no public free tier).
- **Context window:** 1M tokens input and 1M output token limit (output limit raised from the previous 64K — the headline structural change; DataCamp, aireleasetracker; input verified via Artificial Analysis, 2026-10-01).
- **Modalities:** text + image input; text output; reasoning yes (extended thinking); tool calls yes; long-video understanding measured (LVBench 91.7%) and professional chart analysis (Chartography 71.6%); JSON mode not verified.
- **Pricing (as of 2026-10-09):** introductory $2.00/M input, $10.00/M output, cached input $0.10/M (95% off) — rises to $4.00/$20.00 after the introductory period ends (DataCamp, aireleasetracker, netalith; intro period length unpublished). AA cost per Intelligence Index task $1.99 (verbosity-heavy: 110M output tokens vs 82M median). No free tier.
- **Architecture:** proprietary; parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.4%** (Google launch table via DataCamp + aireleasetracker; trails Opus 5.5 66.4% by 9 pts; Astra 58.2%)
- Terminal-Bench Science 0.1: **57.6%** (launch table; trails Astra 68.1% by 10.5 pts)
- Zapier AutomationBench: **51.3%** (launch table; #1 — Opus 5.5 42.5%, Fable 5.1 31.4%)
- Harvey Legal Agent Benchmark: **19.6%** (launch table; vs Astra 5.4%, Fable 5.1 6.7%, Opus 5.5 3.8% — every model fails most of it; relative signal only)
- Vals Index (finance/law/tax/coding by GDP weight): **68.9%** (launch table; #1 — Opus 5.5 67.0%, Fable 5.1 65.8%, Astra 63.1%)
- Vals Finance Agent v2: **65.4%** (launch table; #1 — Fable 5.1 58.9%, Astra 53.5%)
- Agent's Last Exam (pass@1): **39.5%** (aireleasetracker; #1 — Astra 34.2%, Opus 5.5 38.2%)
- OSWorld-2.0 (offline subset): **69.2%** (launch table; trails Astra 72.6%)
- PostTrainBench (ML engineering): **45.3%** (launch table; trails Opus 5.5 49.3%)
- Gray Swan IPI (k=15): **0.7% attack success** (lower is better; #1 — Opus 5.5/Fable 5.1 1.0%; aireleasetracker)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found (individual AA eval not public)
- Claw-Eval / ClawProBench: no verified public score found
- Artificial Analysis Intelligence Index: **53** (Artificial Analysis, rank #8 of 223; class median 26)

Reasoning / knowledge:

- LABBench 2 (lab protocols/figures): **88.8%** (launch table; #1 — Astra 85.4%, Opus 5.5 73.1%)
- RiemannBench: **76.0%** (launch table; #1 — Astra 72.0%)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Vendor claim (unquantified): found a critical vulnerability in healthcare software used by hospitals worldwide that earlier frontier models missed (Google, via StartupFortune/DataCamp)

Coding:

- DeepSWE v1.1: **77.9%** (launch table; new state of the art — Opus 5.5 74.2%, Astra 74.1%, Fable 5.1 67.4%)
- Vibe Code Bench: **91.9%** (launch table; #1 — Claude models 90.3%, Astra 89.6%)
- FrontierSWE v2: **55.0%** (launch table; trails Astra 65.5% and Opus 5.5 62.3% by 10.5 pts)
- CWE-bench v1 (real vulnerability remediation): **68.0%** (launch table; ties GPT-6 Astra for first — Opus 5.5 67%, Fable 5.1 58%)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- GraphWalks (BFS F1, up to 128K): **99.7%** (launch table; #1 — Astra 98.7%)
- GraphWalks (BFS F1, 256K–1M): **84.2%** (launch table; #1 with the widest margin in the table — Astra 71.8%, Opus 5.5 66.8%, Fable 5.1 65.0%)

Multimodal / vision:

- LVBench (long-video understanding, up to 1 hour): **91.7%** (launch table; #1 — Astra 87.5%, Opus 5.5 83.7%)
- Chartography (professional chart analysis): **71.6%** (launch table; #1 — Astra 71.0%, Opus 5.5 66.3%)

Internal Google results (unverified externally, checkable later): Argon agents freed 300+ TiB of memory fleet-wide (500 TiB–1 PiB estimated), ported C/C++ to Rust up to the 800K-line Fuchsia Zircon kernel, 2.7× faster memory-safe libgav1 decoder, 40% quantum spacetime-resource win.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 4.0 57.4% (now verified; mid-band TB ~45–60% → 50–70) and Terminal-Bench Science 57.6% trail Opus 5.5/Astra by 9–10.5 pts, but AutomationBench 51.3% (#1), Vals Finance Agent v2 65.4% (#1), Harvey 19.6% (4–5× rivals), Agent's Last Exam 39.5% (#1), and AA II rank #8/223 show strong agent work — capped by the terminal-execution deficits.
- **Reasoning: 84/100.** AA Intelligence Index 53 at rank #8/223 (top ~4%; Index 60+ → 90–100), LABBench 2 88.8% (#1) and RiemannBench 76.0% (#1) evidence strong cross-domain reasoning; Vals Index 68.9% (#1) supports it. Capped by no public GPQA/HLE/LCR individual scores.
- **Context window: 95/100.** 1M input / 1M output verified → ≥1M tier (95–100); measured GraphWalks retrieval 84.2% at the 256K–1M end (#1, widest margin) is strong but below the ≥98% threshold for 100; 99.7% at ≤128K.
- **Multimodal: 85/100.** Text + image in with measured long-video understanding (LVBench 91.7% #1) and chart analysis (Chartography 71.6% #1) → top of the +video/PDF band (75–90); text-only output and no verified audio/PDF input cap it below 90.
- **Coding: 88/100.** DeepSWE v1.1 77.9% (SOTA) and Vibe Code Bench 91.9% (#1) clear the frontier thresholds (DeepSWE 74%+ → 90–100); docked for FrontierSWE v2 55.0% trailing Astra by 10.5 pts and missing SWE-bench Verified numbers.
- **Cost efficiency: 74/100.** Introductory $2/$10 (cached $0.10, 95% discount) and $1.99 per Intelligence Index task sit between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors; post-promo $4/$20 and the unpublished promo length argue toward the lower half; currently gated so no practical access at any price. Excluded from Overall.
- **Overall Score: 84/100.** Mean of the five quality dims (70 + 84 + 95 + 85 + 88) / 5 = 84.4 → 84. Best-fit: long-context document/repository work, enterprise knowledge work (legal/finance), and cyber defense — stay with Opus 5.5/Astra for terminal-driven agent loops where Argon trails by 9–10 points; practically inaccessible until paid API access opens.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (DuckDuckGo search; DataCamp full benchmark table, AI Release Tracker, netalith, Artificial Analysis cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds the 19-benchmark launch table (Terminal-Bench 4.0 57.4% now absolute, FrontierSWE v2, GraphWalks retrieval, LVBench/Chartography), the 1M output limit, and post-promo pricing — Multimodal 65→85, Reasoning 83→84, Tool 72→70.
- Future sources: add a new file next to this one, e.g. `Gemini_4.1.md`, using the same headings.
