# Gemini 4 Argon — findings by Qwen 4 Max

- Source: Google DeepMind/gemini-4-argon
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's frontier model (first Gemini with a codename instead of Pro/Flash tiers), built for long-horizon software engineering, enterprise knowledge work (legal/finance) and cybersecurity defense. Distinct model, not a tier of another entry; Gemini 4 Carbon is the sibling.
- **Provider / access:** Google (Gemini API / AI Studio; Vertex AI expected). Phased release: announced 2026-09-30 to Fairwind Program trusted cyber defenders first; paid API customers and Google AI Ultra subscribers next (markgrid reports availability from 2026-10-13). No API model ID was published on launch day (DataCamp); absent from OpenRouter/Cursor/Copilot at launch.
- **Release / knowledge:** Announced 2026-09-30; broader access from mid-Oct 2026. Knowledge cutoff not stated in the announcement.
- **IDs:** `google/gemini-4-argon` (tracker convention; official API ID unpublished at launch). No Free ID on OpenCode Zen; access is paid API / AI Ultra subscription / Fairwind vetting.
- **Context window:** 1M-token output limit confirmed by Google (up from 64K — industry-leading). Input window: Google's announcement does not state it; trackers (llm-stats) list 1.0M in / 1.0M out, and Google's own GraphWalks eval spans 256K–1M, so 1M input is tracker-verified, not vendor-stated.
- **Modalities:** Text, image, video, document in (LVBench long-video understanding, chart analysis, document-series actions); text out. Reasoning: yes (deep long-trajectory thinking; AA tested the High setting). Tool calls: yes (agentic workflows). Audio input / image output not confirmed in sources read.
- **Pricing (as of 2026-11-11):** Introductory $2.00 in / $10.00 out per 1M, cached input 95% off ($0.10/M); standard rates $4/$20 (cached $0.20) — Hokai reports the intro price rises 2026-12-01. Reasoning-token billing not stated (DataCamp). AA measured $1.99 cost per average task (vs $3.26 Astra, $5.98 Opus 5.5) but 110M index tokens vs 82M median — verbose.
- **Architecture:** Proprietary; parameters undisclosed. Frontier Safety Framework safeguards (cyber/CBRN), chain-of-thought + action monitors, activation monitoring; Fairwind cohort received it without cyber guardrails. Leads Gray Swan IPI robustness per Google (no score published).

### Raw benchmarks found

Agent / tool use:

- AutomationBench (**Zapier business workflows**): **51.3%** — rank #1 (Google announcement; vs Opus 5.5 42.5% per MarkTechPost)
- Vals Index (**economic-impact composite, finance/coding/legal/tax**): **68.9%** — #1 of 41 (Vals AI; vs Opus 5.5 67.0%, Fable 5.1 65.8%, Astra 63.1%); Vals cost per test $15.68 vs Opus $32.14
- Harvey's Legal Agent Benchmark: **19.6%** (Google table via DataCamp; vs Astra 5.4%, Fable 5.1 6.7%, Opus 5.5 3.8%)
- CWE-bench v1 (**vulnerability remediation**): **68.0%** — ties GPT-6 Astra for first (Google; Opus 5.5 67.0%)
- Terminal-Bench 4.0: **57.4%** vendor-reported (Google table; trails Opus 5.5 66.4%); independent AA run: **57.1%** (vs Opus 59.6%, Astra 59.1%)
- Tau3-Banking / Tau2-Bench / GDPval-AA: no verified public score found
- Gray Swan Indirect Prompt Injection: Google claims lead; no numeric score published

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52.6** (High setting only; vs Opus 5.5 57.6, GPT-6 Astra 52.7 — Trending Topics/AA, Oct 2026 snapshot; index version not stated)
- HLE (Artificial Analysis run): **57.1%** (vs Opus 5.5 61.4%, Astra 54.7%)
- Arena.ai Text Arena: **1525 points — #1** (The Decoder)
- Hallucination rate **15%** vs factual accuracy **50%** (The Decoder; Astra 51% hallucination / 63% accuracy) — low fabrication, mid recall
- GPQA Diamond / LCR / CritPt: no verified public score found

Coding:

- DeepSWE v1.1 (**long-horizon real-world SWE**): **77.9%** — state of the art (Google; vs Opus 5.5 74.2%, Astra 74.1%, Fable 5.1 67.4%)
- FrontierSWE v2: **55.0%** (Google table; trails Astra 65.5% by 10.5 pts, Opus 5.5 62.3%)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found
- Internal (Google, not public benchmarks): C/C++→Rust migrations up to 800K+ lines (Fuchsia Zircon); libgav1 SIMD rewrite 2.7x faster than the prior Rust port with identical output

Long context:

- GraphWalks (256K–1M): **84.2%** (Google table via DataCamp; vs Astra 71.8%, Opus 5.5 66.8%, Fable 5.1 65.0%) — best in the published comparison
- LVBench (**long video understanding**): **91.7%** — state of the art (Google)

### Normalized scores (1–100)

- **Tool use: 92/100.** #1 on AutomationBench (51.3%), Vals Index and Harvey Legal Agent (19.6%, ~3x the next model), CWE-bench v1 tie for first; capped by Terminal-Bench 4.0 trailing Opus 5.5 by ~9 pts on both vendor and independent runs.
- **Reasoning: 89/100.** AA Intelligence Index 52.6 sits below Opus 5.5 (57.6) and level with Astra; HLE 57.1% (AA) mid-pack; Text Arena #1 (1525) and 15% hallucination rate support strong, uneven reasoning; no GPQA published.
- **Context window: 100/100.** Industry-leading 1M-token output (vendor-confirmed) plus 1M input (tracker-listed, GraphWalks measured to 1M) with the best published GraphWalks 256K–1M score (84.2%) — top tier on capacity and measured retrieval.
- **Multimodal: 88/100.** LVBench 91.7% SOTA long-video understanding, professional chart analysis and document-series action; text/image/video in, text out; capped by unconfirmed audio input and no image/audio output.
- **Coding: 92/100.** DeepSWE v1.1 SOTA (77.9%) and proven 800K-line migration capability; capped by FrontierSWE v2 (55.0%, -10.5 vs Astra) and the terminal-agentic gap — strong uneven coder, not a clean sweep.
- **Cost efficiency: 78/100.** Intro $2/$10 with $0.10 cached input and the lowest AA cost per task ($1.99) among frontier peers; discounted for verbosity (110M vs 82M median index tokens) and the scheduled rise to $4/$20 standard rates.
- **Overall Score: 92.2/100.** Mean of the five quality dims (92+89+100+88+92)/5 = 92.2. Best-fit: long-horizon migrations, legal/finance research agents and document/video-heavy knowledge work at frontier level — once access opens beyond Fairwind.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (vendor announcement + independent trackers and security analyses); scores are normalized 1–100 interpretations, not official vendor scores. Vendor vs independent figures are labelled and both cited where they diverge; no third party had reproduced Google's table at launch (DataCamp).
- Reference URLs:
  - [Gemini 4 Argon: our next era of frontier intelligence — Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
  - [Gemini 4 Argon: Benchmarks, Pricing & Security — NeuralTrust](https://neuraltrust.ai/blog/gemini-4-argon)
  - [Gemini 4 Argon Benchmarks, Pricing & Context Window — LLM Stats](https://llm-stats.com/models/gemini-4-argon)
  - [Gemini 4 Argon: Access, Pricing and Benchmarks — Markgrid](https://markgrid.ai/resources/gemini-4-argon-what-it-is-access-pricing-comparison)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.