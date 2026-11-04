# Gemini 4 Carbon — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 4 Carbon (`gemini-4-carbon`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's next frontier model (announced 2026-10-28), built on Gemini 4 Argon — state-of-the-art cybersecurity (vulnerability finding, validation, remediation) and long-horizon agentic coding; #1 on Artificial Analysis Intelligence Index v5.0 (59). Rolled out first to cyber defenders via the Fairwind Program; general developer/consumer access pending.
- **Provider / access:** Gemini API / Vertex AI / AI Studio (`gemini-4-carbon`) — **gated launch** (cyber defenders and trusted partners first; US Government voluntary pre-release testing). No free tier; no OpenCode Zen Free ID confirmed.
- **Release / knowledge:** announced 2026-10-28; knowledge cutoff not disclosed.
- **IDs:** `gemini-4-carbon`.
- **Context window:** 1,000,000 (1M) per Google materials (curated metadata: "1M / 1M out"; BenchLM still lists the window row as pending at 2026-11-05).
- **Modalities:** text, image, speech, video in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-05):** introductory **$2.00 in / $10.00 out** per 1M (same intro as Argon); **$4.00 / $20.00** after the intro period (Google footnote); cached input 95% off ($0.10 intro class).
- **Architecture:** proprietary; built on the Gemini 4 Argon foundation with further alignment/agentic training.

### Raw benchmarks found

Agent / tool use:

- **SEC-bench Pro 88.2%** (Google; state-of-the-art vulnerability finding); **ExploitGym 54.8%** (Google) / 53.5% (BenchLM row); **CWE-bench v1 71.0%** (Collinear)
- **AA Terminal-Bench 4.0 65.2%**; AutomationBench 53.9% (Google) / **AA 77.8%**; OSWorld 2.1 Offline **81.5%**
- GDPval-AA **1733 Elo**; AA-Briefcase 1609; GDP.pdf 28.4%
- Gray Swan IPI: **0.0% attack success** (resisted every evaluated prompt-injection attempt; Argon was 0.7%); Terminal-Bench 4.0 cheating: 0.0% successful (0.4% attempted) — anti-shortcut alignment work is measurable
- Internal (Google, vendor): secure-code generation >2× uplift over Argon; Chrome team >10× better high-quality patches vs another lab's frontier model; misalignment alerts −80% in live coding; overreach −26% / under-service −29%
- Claw-Eval / Tau3 / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- **AA Intelligence Index 59.4 — #1 of 1008** (BenchLM compute; Google blog: #1 on v5.0 at 59)
- AA-HLE **60.4%**; HLE-Diamond **69.1%** (Google launch materials); CritPt **36.0%**
- AA-Omniscience **index 53.5 / accuracy 58.3% / hallucination 11.4%** (low confident-error rate)
- AA-LCR 79.3%; **GraphWalks BFS 256K–1M 96.2%** (best-in-class long-context retrieval among tracked models)
- FrontierSWE v2 **61.2%**; AA-SciCode **64.2%**; WebDev Arena #4 (**1768 Elo**, +89 vs Argon)

Coding:

- FrontierSWE v2 61.2%; AA-SciCode 64.2%; WebDev Arena 1768 (#4); CWE-bench 71.0%
- SWE-bench Verified / SWE-bench Pro / DeepSWE: **not yet published** (gated launch)

Long context:

- GraphWalks BFS 256K–1M **96.2%** (near-saturated at depth); AA-LCR 79.3%.

### Normalized scores (1–100)

- **Tool use: 93/100.** SOTA cyber-defense agent scores (SEC-bench Pro 88.2%, ExploitGym 54.8%, CWE-bench 71.0%), TB4.0 65.2% and AA AutomationBench 77.8% are first-in-class agentic evidence; capped by the absence of Tau3/MCP rows and by GDPval-AA 1733 sitting just under the ~1750 frontier ref.
- **Reasoning: 94/100.** AA Index 59.4 (#1), AA-HLE 60.4%, HLE-Diamond 69.1%, CritPt 36.0% and an 11.4% Omniscience hallucination rate are frontier-leading; no GPQA row published holds it below 95.
- **Context window: 97/100.** 1M window with GraphWalks 96.2% at 256K–1M — the strongest deep-context retrieval reading in the tracked set; the unconfirmed exact output cap keeps it under 98.
- **Multimodal: 88/100.** Text + image + speech + video in, text out (Chartography 72.5%); no non-text output.
- **Coding: 92/100.** FrontierSWE v2 61.2%, SciCode 64.2%, WebDev Arena #4 and elite security-patch benchmarks are strong; SWE-bench Verified/Pro are unpublished and TB4.0 65.2% trails Opus 5.5 (66.4%).
- **Cost efficiency: 72/100.** Intro $2/$10 with a 95% cache discount is strong; post-intro $4/$20 halves the value and there is no free tier.
- **Overall Score: 93/100.** (93 + 94 + 97 + 88 + 92) / 5 = 92.8 → 93. Best fit: defensive-security engineering and long-horizon agentic coding at the frontier — once access opens beyond the Fairwind cohort.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-05
- Method: fresh public internet research (Google launch blog, Google evaluation methodology, BenchLM model page 2026-11-05, Artificial Analysis leaderboard rows, Collinear CWE-bench, launch coverage from i-scoop/Mashable). Vendor SOTA claims are separated from independent rows; the gated rollout and the unpublished SWE-bench rows are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 4 Carbon: our next frontier model](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Google DeepMind — Gemini 4 Carbon evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-4-carbon)
  - [BenchLM — Gemini 4 Carbon benchmark scores](https://benchlm.ai/models/gemini-4-carbon)
  - [Artificial Analysis — Gemini 4 Carbon](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [Collinear — CWE-bench leaderboard](https://cwe-bench.com/)
  - [i-scoop — Gemini 4 Carbon tops the frontier benchmarks](https://www.i-scoop.eu/gemini-4-carbon/)
- Future sources: add a new file next to this one, e.g. `Gemini_4_Carbon.md`, using the same headings.
