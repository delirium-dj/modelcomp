# Claude Sonnet 5 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's June-2026 **mid-tier** model (family order: Fable 5 > Opus 4.8 > **Sonnet 5** > Haiku 4.5) and the first Sonnet that genuinely rivals the flagship on most intelligence benchmarks — **SWE-bench Verified 85.2%**, **GDPval-AA 1618 Elo (≈ ties Opus 4.8's 1615)**, **HLE-with-tools 57.4% (near Opus 4.8's ~57.9%)** and **Terminal-Bench 2.1 80.4% (level with the flagship)** — at ~40% lower per-token cost. The catch that defines it: **adaptive thinking is always on** (five effort levels) and a new tokenizer inflates output ~1.0–1.35×, so Artificial Analysis measured **cost-per-task ~$2.29, ~15% *more* than Opus 4.8** unless effort is actively managed. A stark harness sensitivity also shows up on the newest terminal-agent benchmark (**Terminal-Bench 4.0 = 10.3%**, later fixed to 70.6% in Sonnet 5.5).
- **Provider / access:** claude.ai (**default model for Free and Pro tiers**), Anthropic API (`claude-sonnet-5`), Claude Code, AWS Bedrock, Google Vertex AI, Microsoft Foundry, and aggregators. Broadest channel availability of any current Claude.
- **Release / knowledge:** Released **2026-06-30** (succeeds Claude Sonnet 4.6). **Knowledge cutoff January 2026.**
- **IDs:** `claude-sonnet-5` (predecessor `claude-sonnet-4-6`; successor Sonnet 5.5; flagship siblings Opus 4.8 / Fable 5).
- **Context window:** **1M tokens native** (matched only by Opus 4.8 in the lineup); **128K max output** standard, **up to 300K via the Batch API beta**. No MRCR-style long-context recall figure published in the sources reviewed.
- **Modalities:** **text + image in → text out** (no audio). **Adaptive thinking always on, cannot be disabled** — five effort levels (low / medium / **high [default]** / xhigh / max); full tool use, self-verifying agentic follow-through.
- **Pricing (as of 2026-10-23):** **Standard $3 / 1M input, $15 / 1M output** (in effect from 2026-09-01). *Intro pricing was $2 / $10 through 2026-08-31 — now expired.* Prompt-cache reads up to **90% off**; **Batch API 50% off**. Per-token ~40% cheaper than Opus 4.8 ($5/$25), **but AA-measured cost-per-task is ~$2.29 (~15% above Opus 4.8)** because always-on reasoning + the new tokenizer inflate output tokens.
- **Architecture:** Undisclosed proprietary. Shares the **new tokenizer** with Opus 4.7/4.8/Fable 5 (~1.0–1.35× more tokens than older Claude tokenizers) — the root of the effort-level cost trap.

### Raw benchmarks found

Coding & agentic (Anthropic model overview; AA where noted):

| Benchmark | Sonnet 4.6 | **Sonnet 5** | Opus 4.8 |
| --- | --- | --- | --- |
| SWE-bench Verified | 79.6% | **85.2%** | 88.6% |
| SWE-bench Pro | N/A | **63.2%** | N/A |
| FrontierCode | 15.1% | **38.8%** | N/A |
| Terminal-Bench 2.1 | N/A | **80.4%** | ~82.7%* (74.6–82.7 by harness) |
| GDPval-AA (knowledge-work Elo) | N/A | **1618** | 1615 (≈ tie) |
| Humanity's Last Exam (with tools) | N/A | **57.4%** | ~57.9% (near-tie) |

- **FrontierCode 38.8%** more than *doubles* Sonnet 4.6's 15.1% — the most dramatic generational jump (complex code generation)
- **Terminal-Bench 4.0: 10.3%** (per Anthropic's Sonnet 5.5 launch comparison) — a strikingly low score on the newest/hardest terminal-agent harness; Sonnet 5.5 later reached 70.6%. Highlights severe harness-version sensitivity vs the 80.4% on Terminal-Bench 2.1.

Reasoning / knowledge (Artificial Analysis **independent**):

- **AA Intelligence Index: 53** — ranks **#5 overall**; below Opus 4.8 (max, 56), GPT-5.6 Sol (max, 59) and Claude Fable 5 (60), above the ~51 mid-tier pack (GLM-5.2 / GPT-5.4 / Muse Spark 1.1)
- **HLE with tools 57.4%** (near-tie Opus 4.8); **GDPval-AA 1618 Elo** (statistical tie with the flagship) — strong multi-step, judgment-heavy knowledge work
- At **low effort**, Sonnet 5 already beats Sonnet 4.6 at *any* effort on most benchmarks (Zapier engineering)

Multimodal:

- Text + image input, text output; **no audio**. No MMMU / MathVision / vision benchmark published in the sources reviewed.

Behavioral notes:

- Praise: autonomous agentic follow-through (runs a test → sees failure → fixes → re-runs unprompted); tasks that "used to stall" now complete end-to-end
- Complaints: over-refusal ("paranoid" guardrails, largely claude.ai system-prompt-specific), and **agentic over-reading** (reads tens of thousands of lines for simple questions — a direct consequence of always-on adaptive thinking, burns tokens fast)

> Provenance: The benchmark table is **Anthropic vendor-run** (model overview), reproduced by Happycapy's Sonnet 5 deep-dive (2026-07-02); the **AA Intelligence Index 53 and cost-per-task ~$2.29** are **Artificial Analysis independent** measurements. Per methodology the vendor cells are treated as an upper bound and discounted against the neutral AA signal. Opus 4.8's Terminal-Bench 2.1 is itself harness-dependent (~74.6–82.7), so Sonnet 5 vs the flagship on terminal work is best read as *level*, not a clear win or loss. The **Terminal-Bench 4.0 = 10.3%** figure comes from Anthropic's own Sonnet 5.5 launch comparison and is the model's clearest documented weakness (newest agentic-terminal harness). Pricing is phase-dependent: **$2/$10 intro expired 2026-08-31; $3/$15 standard is current** as of this writing (2026-10-23) — some launch-era articles still quote the intro rate. The always-on-thinking cost inflation is empirically confirmed by AA (~15% above Opus 4.8 per task). No benchmark was invented.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong agentic tool orchestration — **GDPval-AA 1618 Elo (≈ ties Opus 4.8)**, **HLE-with-tools 57.4% (near-tie)**, **Terminal-Bench 2.1 80.4% (level with the flagship)**, plus reliable self-verifying follow-through. Held below the flagship tier by the **shocking Terminal-Bench 4.0 = 10.3%** (a documented collapse on the newest/hardest terminal-agent harness, only fixed in Sonnet 5.5), agentic **over-reading** that stalls token budgets, and vendor-run reporting.
- **Reasoning: 86/100.** **AA Intelligence Index 53 (independent, #5 overall)** with **HLE-with-tools 57.4%** near Opus 4.8 and a statistical tie on GDPval knowledge work — the first Sonnet to overlap the flagship on reasoning. Capped below Opus 4.8 (Index 56) / Fable 5 (60) because it *is* the mid-tier, and always-on adaptive thinking is a cost lever rather than a reasoning-ceiling gain.
- **Context window: 88/100.** A **1M-token native window** (matched only by Opus 4.8 in the lineup), 128K standard output and **300K via Batch beta** — excellent for full-codebase analysis, long legal documents and multi-document synthesis at mid-tier cost. Discounted below the 89–93 native-1M leaders because **no MRCR-style long-context recall benchmark** is published here to verify quality at depth.
- **Multimodal: 79/100.** **Text + image only (no audio)** with **no published vision benchmark** (no MMMU/MathVision/DocVQA) in the sources reviewed. Vision is competent for document/UI/agentic reading but is neither measured nor a differentiator, so I score conservatively rather than assume flagship parity.
- **Coding: 86/100.** Elite real-world software engineering for a mid-tier model — **SWE-bench Verified 85.2%** (+5.6 over Sonnet 4.6, only 3.4 below Opus 4.8), **SWE-bench Pro 63.2%**, and **FrontierCode 38.8% (more than double the prior gen)**, with Terminal-Bench 2.1 80.4% level with the flagship. Held below the high-80s/90s by the **Terminal-Bench 4.0 = 10.3% collapse** and because SWE-bench Verified still trails Opus 4.8 (88.6%) and the later frontier (Fable 5 ~95%).
- **Cost efficiency: 68/100.** The defining tension — **sticker price $3/$15 is ~40% below Opus 4.8** with 90%-off prompt caching and 50%-off Batch, and at **low effort** it's a genuine cheap workhorse (beats Sonnet 4.6 at any effort for less). But **always-on adaptive thinking + the new tokenizer inflate real spend**: AA measured **~$2.29 cost-per-task, ~15% *more* than Opus 4.8**, so unmanaged it can be the *more* expensive choice. Above Opus 4.6 (60) on sticker/low-effort value, well below the open-weight value models. Scored but **not** counted in the Overall per methodology.
- **Overall Score: 85/100.** Mean of Tool 85 + Reasoning 86 + Context 88 + Multimodal 79 + Coding 86 = 424/5 = 84.8 → 85. Best fit: **the default high-volume agentic workhorse** — end-to-end coding agents, terminal work, knowledge/research pipelines and 1M-context analysis where you want near-flagship quality at ~40% lower per-token cost, *provided you manage effort level* (default to low, reserve xhigh/max for genuinely hard problems) and instrument token counts. Escalate to Opus 4.8 for output-variance-critical / irreversible actions, and avoid it for the newest terminal-agent harness (TB 4.0) until Sonnet 5.5. Independent read: my 85 sits **below the queue's curated 87.9** — I discount the vendor benchmark table against the independent **AA Index 53** (a clear tier below Opus 4.8/Fable 5), weigh the **Terminal-Bench 4.0 = 10.3%** collapse and the **AA-confirmed cost-per-task trap (~$2.29, above Opus 4.8)**, and score the unmeasured text+image multimodal path conservatively — landing just below Opus 4.6 (86) despite Sonnet 5's newer, stronger coding, because the flagship tier still leads on reasoning breadth and agentic robustness.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23
- Method: public internet research (Happycapy's "Claude Sonnet 5: Benchmarks, Pricing & When to Use It," 2026-07-02, reproducing Anthropic's model-overview benchmark table and the Artificial Analysis independent Index 53 / cost-per-task ~$2.29; Anthropic's Sonnet 5.5 launch page for the Terminal-Bench 4.0 = 10.3% comparison; Morph's Sonnet 5 spec sheet for the intro-vs-standard pricing phases). Vendor cells are treated as an upper bound and discounted against the neutral AA signal; the always-on-adaptive-thinking cost inflation and the TB 4.0 collapse are reflected in the Cost-efficiency and Tool-use/Coding scores. Current pricing ($3/$15 standard) is stated as of 2026-10-23 (the $2/$10 intro expired 2026-08-31). Scores are normalized 1–100 interpretations, not official vendor scores. No unverified benchmark was invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
