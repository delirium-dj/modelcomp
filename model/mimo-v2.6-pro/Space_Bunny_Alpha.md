# MiMo V2.6 Pro — findings by Space Bunny Alpha

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (open weights, MIT; no OpenCode Zen Free ID)
- **Short description:** Xiaomi's flagship open-weight omnimodal MoE, released 2026-09-21 alongside the cheaper MiMo-V2.6-Flash and a 9B laptop distill. It is the highest-scoring open-weight model on the Artificial Analysis Intelligence Index (46, level with Grok 4.7) while costing $0.435/$0.87 per 1M on Xiaomi's API, built by scaling reinforcement-learning compute, environment diversity, and grader compute. Intended for agentic coding, computer use, and omnimodal work; not a variant of an existing entry, though it shares the V2.6 codebase and benchmark table with V2.6-Flash.
- **Provider / access:** Xiaomi MiMo API platform and Xiaomi AI Studio (`mimo-v2.6-pro`); MiMo Code, MiMo Desktop; also served via OpenRouter. Weights downloadable free from Hugging Face. The release also ships a technical report, RL environments, and training code.
- **Release / knowledge:** released 2026-09-21; no knowledge cutoff published by Xiaomi.
- **IDs:** `mimo-v2.6-pro` on the Xiaomi platform; HF repo `MiMo-V2.6-Pro` (exact repo naming per Xiaomi's release post). No Free ID exists on OpenCode Zen — cost is scored on the paid Xiaomi API price.
- **Context window:** 1,048,576 tokens (1M), verified by Artificial Analysis running the model rather than read from a spec sheet; Xiaomi publishes no separate input/output split. Xiaomi publishes no hardware guidance for self-hosting.
- **Modalities:** text, image, audio, and video in; text out (omnimodal input, text-only output). Tool use / function calling; reasoning traces; open-weights self-hosting.
- **Pricing (as of 2026-09-29):** $0.435 per 1M uncached input, $0.87 per 1M output, $0.0036 per 1M cached input on Xiaomi's own API. Paid, but MIT-licensed weights mean self-hosting carries no licence fee. No free hosted tier; Flash is the budget sibling at $0.14/$0.28.
- **Architecture:** Mixture-of-Experts, 1.02 trillion total parameters with 42 billion active per token, MIT license (commercial use and self-hosting permitted). 309B/15B-active is the Flash sibling.

### Raw benchmarks found

Agent / tool use:

- AutomationBench v1.0.0.6: **53.1%** (Xiaomi model card; above Claude Opus 5 at 50.3%, GPT-5.6 Sol 45.8%, Fable 5.1 46.2% — one of only three rows where Pro beats Opus 5)
- Toolathlon-Verified: **76.9%** (Xiaomi model card; Opus 5 80.6%, Fable 5.1 77.9%, GPT-5.6 Sol 74.9%)
- OSWorld-Verified: **82.0%** (Xiaomi model card; Opus 5 83.4%, GPT-5.6 Sol 83.0%, Fable 5.1 86.0%)
- Terminal Bench 4.0: **34.9%** (Xiaomi model card; Opus 5 49.0%, GPT-5.6 Sol 39.9%, Fable 5.1 42.4%, GPT-6 Astra 59.6% — the weakest agentic row for Pro)
- Terminal Bench 2.1: **89.9%** (Xiaomi model card; Opus 5 89.1%, GPT-5.6 Sol 88.8% — Pro edges ahead on the older harness)
- GDPval-AA 2.1: **1673 Elo** (Xiaomi model card; Opus 5 1708, GPT-5.6 Sol 1588, Fable 5.1 1595; MiMo-V2.5 Pro 1107)
- Agents' Last Exam: **31.6%** (Xiaomi model card; tied with Opus 5 at 31.6, GPT-5.6 Sol 30.8)
- JobBench: **62.0%** (Xiaomi model card; Opus 5 65.7%, GPT-5.6 Sol 45.4%, Fable 5.1 57.4%)
- CyberGym: **94.0%**; MiMo Cyber Bench: **80.2%**; ExploitGym: **17.8%**; ExploitBench: **47.9%**; SEC Bench Pro: **66.3%** (Xiaomi model card, cybersecurity rows; ExploitBench trails Opus 5 by 22.1 points and GPT-5.6 Sol by 30.6, ExploitGym trails GPT-6 Astra 42.4 vs 17.8)
- Tau3-Banking / Tau2-Bench / GDPval-AA third-party: **no verified public score found**
- Harness caveat: Xiaomi does not name the harness behind its agent rows, so DeepSWE/Terminal-Bench/AutomationBench figures are vendor-run until an outside team reproduces them. A tally of the technical report's own table puts Pro at 3 wins / 1 tie / 10 losses against Claude Opus 5 and 8–7 against GPT-5.6 Sol.
- Independent cost/speed read (Artificial Analysis, 2026-09-22 onward): $0.13 per Intelligence Index task versus $1.06 for GPT-6 Sol at max effort and $5.98 for Opus 5.5.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3: **46.32** (46 rounded; #1 among 115 open-weight models on AA, level with Grok 4.7 at xhigh; below GPT-6 Sol at max 48, GPT-6 Astra 53, Claude Fable 5.1 53, Claude Opus 5.5 58, Qwen3.8 Max and Kimi K3 one and two points behind)
- Agents' Last Exam: **31.6%** (see above; the only published hard-reasoning row)
- GPQA Diamond / HLE / CritPt / LCR / MLCR / Omniscience / Hallucination rate: **no verified public score found**
- Output speed: **129.7 tokens/s** on Xiaomi's API (AA), TTFT 2.17s; 140M output tokens consumed across the Intelligence Index evaluation, flagged as somewhat verbose.

Coding:

- DeepSWE v1.1: **71.9%** (Xiaomi model card; Opus 5 74.0%, GPT-5.6 Sol 73.0%, Fable 5.1 70.0%, Grok 4.7 71.0%. The release post says the score rose to 72.6 during RL while the card table prints 71.9 — a known inconsistency; MiMo-V2.5 Pro was 19.0)
- MiMo Code Bench: **63.2%** (Xiaomi in-house; Opus 5 68.6%, GPT-5.6 Sol 59.3%, GPT-6 Astra ahead here)
- ProgramBench: **26.5%** (Xiaomi model card; Opus 5 37.0%, Fable 5.1 33.0%, GPT-5.6 Sol 25.0% — the weakest coding row for Pro)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks retrieval measurement published for MiMo-V2.6-Pro by Xiaomi or a third party. The 1,048,576-token window is confirmed as real by Artificial Analysis running the model, but it is a capacity spec rather than a measured retrieval result.

### Normalized scores (1–100)

- **Tool use: 76/100.** Genuinely competitive where the task is broad automation rather than deep terminal work: AutomationBench 53.1% actually beats Claude Opus 5, OSWorld-Verified 82.0% is within 1.4 points of it, Toolathlon-Verified 76.9% and GDPval-AA 1673 are close. Capped by Terminal Bench 4.0 at 34.9%, a 14-point deficit to Opus 5, plus ExploitBench 47.9% and ExploitGym 17.8% — and every one of these agent numbers is vendor-run with an unnamed harness.
- **Reasoning: 72/100.** An Artificial Analysis Intelligence Index of 46.32 is genuinely top-of-open-weights and a real coin-flip against GPT-5.6 Sol (48), but it sits 5 points under Opus 5.5 and 7 under Fable 5.1, and Agents' Last Exam at 31.6% merely ties Opus 5 rather than beating it. No GPQA, HLE, or hallucination-rate row has been published independently.
- **Context window: 88/100.** A confirmed 1,048,576-token window — the top practical tier — on a model AA verified by execution rather than by datasheet. Held below the ceiling because no long-context retrieval benchmark (MRCR/RULER/GraphWalks) has been reported, so only the capacity, not the measured usable limit, is evidenced.
- **Multimodal: 80/100.** The broadest input surface in the comparison set at text, image, audio, and video in with text out, and a real visual-agent row in MiMo VisualCoding at 72.3. Capped by text-only output and by that in-house benchmark being Xiaomi's own, with GPT-6 Astra ahead at 82.2 and Fable 5.1 at 74.4.
- **Coding: 78/100.** DeepSWE v1.1 at 71.9% is within 2 points of Opus 5 and above Fable 5.1, a 53-point jump on MiMo-V2.5 Pro, and MiMo Code Bench 63.2% beats GPT-5.6 Sol. Capped by ProgramBench at only 26.5% and by Terminal Bench 4.0 at 34.9%, so the agentic-coding story holds at the older/2.1 harnesses and thins on the current one.
- **Cost efficiency: 92/100.** $0.435 / $0.87 with cached input at $0.0036 is a Pareto-frontier price by Artificial Analysis's own plot, and MIT-licensed weights mean the licence itself is free. The deductions are for a paid-only hosted tier and for real inference cost: 1.02T parameters is a research asset for most teams, and 140M tokens across one AA index evaluation is verbose.
- **Overall Score: 78.8/100.** Five quality dims mean out at 78.8; the best fit is cost-sensitive agentic deployments and self-hosted open-weights experimentation that need broad multimodal input and a 1M window, with the caveat that Xiaomi's agent and coding numbers are self-reported and Terminal Bench 4.0 is the row to watch.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research (Xiaomi MiMo-V2.6 announcement and model card, VentureBeat, DataNorth, Artificial Analysis, ComputingForGeeks, Laura Martel's read of the technical report); scores are normalized 1–100 interpretations, not official vendor scores. Xiaomi's own table is vendor-reported; only the Artificial Analysis Intelligence Index and the 1M context confirmation are third-party.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_Alpha_v2.md`, using the same headings.
