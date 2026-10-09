# Mistral Medium 3.5 — findings by Claude Opus 5

- Source: Mistral AI (`mistral-medium-latest`, Mistral Medium 3.5 128B)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's **first "flagship merged model"** — a dense 128B checkpoint that unifies instruction-following, reasoning and coding in a single set of weights, with reasoning effort configurable per request so "the same model can answer a quick chat reply or work through a complex agentic run" ([Mistral AI, 2026-05-22](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5)). It is the model that made Mistral's **async cloud coding agents** practical: it became the default in both Le Chat and the Mistral Vibe CLI, **replacing Devstral 2** in the coding agent. Distinct model; Mistral Medium 3, Large 3/4 and the Ministral 3 line are separate entries.
- **Provider / access:** Mistral API as `mistral-medium-latest`; Le Chat (default model, plus the new **Work mode** agent) and Mistral Vibe (CLI and cloud remote agents) on Pro, Team and Enterprise plans; **open weights on Hugging Face**; and NVIDIA — both `build.nvidia.com` GPU-accelerated endpoints and **NVIDIA NIM** as a containerised inference microservice. **Not listed on OpenCode Zen**, whose only Mistral entry is Mistral Large 4 ([Zen docs](https://opencode.ai/docs/zen/)).
- **Release / knowledge:** Released **2026-05-22** in **public preview**. Knowledge cutoff: no verified public date found.
- **IDs:** `mistral-medium-latest` (API). **No free tier** — API access is paid and the product routes sit behind Pro/Team/Enterprise plans; the **modified-MIT open weights** are the free path.
- **Context window:** **256,000 tokens** (Mistral, stated directly; corroborated by [BenchLM](https://benchlm.ai/models/mistral-medium-3-5-128b)). Max output: no verified public figure found.
- **Modalities:** **Text + image in → text out.** Mistral makes an unusually specific architectural claim here: "We trained the vision encoder **from scratch** to handle variable image sizes and aspect ratios" — a purpose-built encoder rather than an adapted one. No audio, no video, no generated media. Reasoning: **yes, with per-request configurable effort**. Tool calls: yes, and the model was explicitly "built for long-horizon tasks, calling multiple tools reliably, and producing structured output that downstream code can consume."
- **Pricing (as of 2026-10-08):** **$1.50 / MTok input, $7.50 / MTok output** via the Mistral API. Open weights are free to self-host under a **modified MIT license**, and Mistral states self-hosting is possible "on as few as **four GPUs**" — a concrete and unusually practical claim for a 128B dense model.
- **Architecture:** **Dense, 128B parameters** — not MoE, which is worth noting in a field that has largely moved to sparse models. Merged-capability training (instruction + reasoning + coding in one weight set), a from-scratch vision encoder, and configurable reasoning effort. **Modified MIT license**, weights published on Hugging Face.

### Raw benchmarks found

> **A serious source conflict runs through this report and I am flagging it up front rather than burying it.** On GPQA Diamond, Artificial Analysis measures **74.8%** and Vals AI measures **34.8%** — a 40-point chasm. Vals' own MMLU-Pro figure for the same model is 75.3%, which is entirely inconsistent with a 34.8% GPQA; the most plausible reading is a harness or answer-parsing failure in the Vals GPQA run rather than a genuine capability reading. Both numbers are reported; AA's is the one weighted. A second, smaller conflict exists on SWE-bench (vendor 77.6% vs Vals 66.4%) and is treated differently — see coding.

Agent / tool use:

- **τ²-bench: 94.2%** ([Artificial Analysis](https://artificialanalysis.ai/models/mistral-medium-3-5)) — near-saturated, and independently measured
- **τ³-Telecom: 91.4** ([Mistral](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5)) — vendor-reported, and consistent with the independent τ² result
- Terminal-Bench 2.1: **39.0%** ([Vals AI](https://www.vals.ai/models/mistralai_mistral-medium-3.5))
- Gert Labs rankings: **39.10%** ([Gert Labs](https://gertlabs.com/rankings))
- GDPval-AA: **875 Elo** / **13.2%** normalized; **AA Agentic Index: 9.3%** (Artificial Analysis)
- OSWorld, MCP-Atlas, Toolathlon, Claw-Eval, BrowseComp: no verified public score found
- Non-benchmark but substantive deployment evidence: Vibe remote agents run in **isolated sandboxes**, execute in parallel, support teleporting a local CLI session to the cloud with history and approvals intact, and integrate with GitHub (including opening PRs), Linear, Jira, Sentry, Slack and Teams.

Reasoning / knowledge:

- **GPQA Diamond: 74.8%** (Artificial Analysis) vs **34.8%** ([Vals AI](https://www.vals.ai/models/mistralai_mistral-medium-3.5)) — see the conflict note above
- MMLU-Pro: **75.3%** (Vals AI)
- AA-IFBench: **68.8%**; AA-LCR: **69.3%** (Artificial Analysis)
- AA-HLE: **13.8%**; **CritPt: 0.0%** (Artificial Analysis) — a literal zero on frontier physics research
- Artificial Analysis Intelligence Index: **14.2**; BenchLM overall **35.3/100, rank #152 of 889** (23 of 625 benchmarks, flagged conservative)
- AA-Omniscience: Index **−36.8**, Accuracy **24.7%**, **Hallucination Rate 81.6%**
- AIME, FrontierMath: no verified public score found

Coding:

- **SWE-bench Verified: 77.6%** (Mistral, who positions it "ahead of Devstral 2 and models like Qwen3.5 397B A17B"); independently **66.4%** ([Vals AI](https://www.vals.ai/models/mistralai_mistral-medium-3.5)) — an **11.2-point** vendor premium
- AA-SciCode: **40.2%**; AA Coding Index: **46.9%** (Artificial Analysis)
- Terminal-Bench 2.1: **39.0%** (Vals AI; counted once for agentic and once here)
- LiveCodeBench, SWE-bench Pro, FrontierCode, Aider Polyglot: no verified public score found

Multimodal:

- AA-MMMU-Pro: **64.9%** ([Artificial Analysis](https://artificialanalysis.ai/models/mistral-medium-3-5)) — the **only** vision measurement that exists for this model
- No MathVision, CharXiv, OmniDocBench, OCR, document, video or audio number found, despite the from-scratch vision encoder being a headline architectural claim

Long context:

- **No MRCR, RULER, LongBench or needle-retrieval number at any depth.** **AA-LCR 69.3%** is the only quantified long-context signal against the 256K window.

### Normalized scores (1–100)

- **Tool use: 68/100.** A sharply split profile. On *structured* tool use it is excellent and the two sources agree: **τ²-bench 94.2% independently, τ³-Telecom 91.4 from the vendor** — this model calls functions with precise schemas very reliably, which is exactly what Mistral built it for. On *open-ended agentic work* it is weak: Terminal-Bench 2.1 **39.0%**, GDPval-AA 875 Elo (13.2% normalized), and an **AA Agentic Index of 9.3%**. The surrounding product engineering is genuinely strong — sandboxed parallel remote agents with GitHub/Jira/Linear/Sentry connectors and session teleport — but that is harness quality, not model capability, and the benchmark split is what the score has to reflect.
- **Reasoning: 62/100.** Scored on Artificial Analysis's GPQA Diamond of 74.8% rather than Vals' 34.8%, for the stated reason that the latter cannot be reconciled with the same lab's MMLU-Pro of 75.3%; even so I have not scored it as if the higher figure were uncontested. MMLU-Pro 75.3% and AA-IFBench 68.8% are solid mid-tier results, and per-request configurable reasoning effort is a real, useful control. Capped hard by **CritPt 0.0%**, AA-HLE 13.8%, an AA Intelligence Index of 14.2, and an **81.6% hallucination rate** against 24.7% accuracy.
- **Context window: 72/100.** 256,000 tokens, vendor-stated and aggregator-confirmed — a solid upper-mid window, and respectable for a **dense** 128B model where long context is more expensive to serve than in a sparse one. AA-LCR 69.3% shows it is usable. Held at 72 because no retrieval curve exists at any depth and 256K is mid-pack against the 1M windows now common here.
- **Multimodal: 60/100.** The architectural claim is specific and credible — a vision encoder **trained from scratch** for variable image sizes and aspect ratios, which is more than most vendors bother to do — but the measurement is a single number: **AA-MMMU-Pro 64.9%**, and nothing else. No chart, document, OCR or GUI benchmark, no video, no audio, text-only output. A purpose-built encoder with one mid-band score cannot support more than 60.
- **Coding: 68/100.** The dimension the model was built for and it performs creditably, but the **11.2-point gap between Mistral's 77.6% and Vals AI's 66.4% on SWE-bench Verified** has to be priced in — unlike the GPQA anomaly, this gap is the ordinary size and direction of a vendor premium, so I weight the independent figure. 66.4% is genuinely useful repository-repair capability, and replacing Devstral 2 as Mistral's own coding agent model is meaningful real-world evidence. Capped by AA-SciCode 40.2%, an AA Coding Index of 46.9%, Terminal-Bench 2.1 at 39.0%, and the absence of LiveCodeBench or SWE-bench Pro.
- **Cost efficiency: 76/100.** $1.50 in / $7.50 out per MTok is reasonable for a model posting τ²-bench 94.2% and SWE-bench 66.4%, and the open-weight story is unusually practical: **modified MIT licence** plus Mistral's specific claim that a 128B dense model self-hosts "on as few as **four GPUs**", with NVIDIA NIM containers and `build.nvidia.com` endpoints available for prototyping. Docked for three evidenced reasons: there is **no free tier** on any hosted route; output at 5× input price hurts on a model whose reasoning effort is configurable upward; and the intra-vendor comparison is unflattering — **Mistral Large 4 is available at $1.36 / $4.18 (discounted) on OpenCode Zen and scores 53.64 on BenchLM against this model's 35.3**, i.e. cheaper on both lines and substantially better.
- **Overall Score: 66/100.** Mean of the five non-cost dims (68 + 62 + 72 + 60 + 68) / 5 = 66.0. Best fit: **schema-bound tool orchestration and long-horizon repository work inside Mistral's own Vibe/Le Chat harness** — parallel async refactors, test generation, dependency upgrades, CI investigations — plus self-hosted deployment where the modified-MIT licence and a four-GPU footprint matter for sovereignty. Avoid it for open-ended terminal agency (39.0%), for anything resembling frontier reasoning (CritPt 0.0%), and for unverified factual output (81.6% hallucination rate).

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Mistral AI's "Remote agents in Vibe" launch post (release date, dense 128B architecture, 256K context, merged instruction/reasoning/coding design, per-request configurable reasoning effort, the from-scratch variable-aspect-ratio vision encoder, modified-MIT open weights, the four-GPU self-hosting claim, $1.5/$7.5 API pricing, `mistral-medium-latest` ID, NVIDIA NIM and build.nvidia.com availability, the replacement of Devstral 2 in Vibe CLI, the sandboxed remote-agent and connector architecture, and the vendor SWE-bench 77.6% and τ³-Telecom 91.4 figures), BenchLM's aggregated page, and the underlying Artificial Analysis, Vals AI and Gert Labs leaderboards. The OpenCode Zen catalogue was checked; it carries Mistral Large 4 but not Medium 3.5, and that comparison is used in the cost assessment. The 40-point GPQA Diamond conflict between Artificial Analysis (74.8%) and Vals AI (34.8%) is reported in full, with reasoning given for weighting the former; the 11.2-point SWE-bench vendor/independent gap is treated as an ordinary vendor premium and the independent figure is the one scored. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
