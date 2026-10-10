# GPT-5.5 — findings by Space Bunny

- Source: OpenAI (`gpt-5.5`; reasoning effort `none` → `xhigh`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (flagship; `xhigh` reasoning effort)
- **Short description:** OpenAI's previous-generation frontier reasoning model (internal codename "Spud"), released 2026-04-23 — the first fully retrained base since GPT-4.5. Positioned for agentic coding, computer use, knowledge work, and long-horizon tool-calling loops. Now a **legacy API model**: it retires from ChatGPT / ChatGPT Work / Codex on 2026-10-14 but remains on the OpenAI API.
- **Provider / access:** OpenAI API (`gpt-5.5`, snapshot `gpt-5.5-2026-04-23`), Responses and Chat Completions APIs; Azure OpenAI Service; OpenCode Zen (Responses endpoint); Artificial Analysis lists 2 API providers.
- **Lifecycle:** **Partial retirement 2026-10-14** from ChatGPT, ChatGPT Work, and Codex across all plans (consumer, Business, Enterprise, Edu) — announced in OpenAI's changelog entry dated 2026-09-14. **This retirement does not apply to the OpenAI API**, and Codex authenticated with an API key is unaffected. The model does **not** appear on OpenAI's API deprecations page and no API shutdown date has been announced (policy: ≥6 months' notice for generally available models). GitHub Copilot separately drops GPT-5.5 on **2026-10-19**.
  - Official Codex replacements: `gpt-6-sol` on Plus / Pro / Business / Enterprise / Edu; `gpt-6-luna` in the desktop app on Free / Go — both "when available". OpenAI additionally recommends **GPT-6.1 Sol** (launched in Codex and Work 2026-09-29) for complex coding and agentic workflows.
  - Superseded twice: GPT-5.6 Sol (2026-07-09) and GPT-6 Astra (2026-09-03, now OpenAI's most capable model).
- **Release / knowledge:** Released 2026-04-23; API live 2026-04-24. **Knowledge cutoff December 2025** (verified on OpenAI's model page).
- **IDs:** `gpt-5.5`; snapshot `gpt-5.5-2026-04-23`. Do not confuse with **GPT-5.5 Instant**, a separate faster ChatGPT-oriented model exposed via `chat-latest` (default in ChatGPT 2026-05-05 → 2026-08-06, replaced by GPT-5.6 Luna). Also distinct from **GPT-5.5 Pro** ($30/$180).
- **Context window:** **1,048,576 tokens** total (input + output) — 1M input; **max output 128,000 tokens** (OpenAI developer docs, verified). Codex with ChatGPT sign-in caps this at **400K**. The prior pass recorded "approximately 922K" from Artificial Analysis — the official figure is 1,048,576.
- **Modalities:** Text and image input; text output on the API. Underlying architecture is **natively omnimodal** (text, image, audio, video end-to-end in one system), though the API surface exposes text/image.
- **Pricing (as of 2026-10-07, official pricing page):** $5.00 / 1M input and $30.00 / 1M output; cached input $0.50; Batch and Flex $2.50 / $15.00; Priority $12.50 / $75.00. **Above 272K input tokens a 2× input and 1.5× output multiplier applies to the full session** — the headline $5/$30 is the short-context rate only.
- **Architecture:** Ground-up rebuild, first full retrain since GPT-4.5; co-designed with NVIDIA GB200 / GB300 NVL72 rack-scale systems, which is how it matches GPT-5.4's per-token latency despite materially higher capability. Reasoning effort spans `none` → `xhigh`. OpenAI reports ~40% fewer output tokens for equivalent Codex tasks vs GPT-5.4. Parameter count not disclosed; community MoE estimates of 100–200B active parameters are unverified.
- **Serving variants:** Codex Fast mode — 1.5× speed for 2.5× cost.

### Raw benchmarks found

Vendor-reported (OpenAI "Introducing GPT-5.5", 2026-04-23, and developer model docs — these are provider-run evaluations, not independent):

Coding / agentic:

- Terminal-Bench 2.0: **82.7%** — state of the art at launch (#1/48 on the leaderboard)
- SWE-Bench Pro (Public): **58.6%** — trails Claude Opus 4.7 (64.3%)
- SWE-bench Verified: **88.7%** per OpenAI's launch materials; **82.6%** in the Model Beats catalogue — tracked discrepancy
- Expert-SWE (OpenAI internal, median ~20h human completion time): outperforms GPT-5.4; value not published
- LiveCodeBench: **85.3%** (Model Beats catalogue)

Agent / tool use:

- OSWorld-Verified (computer use): **78.7%**
- Tau2-bench Telecom: **98.0%**
- GDPval (44 occupations, wins or ties): **84.9%**
- MCP Atlas (tool calling): **75.3%** — trails Opus 4.7 (79.1%)
- BrowseComp: **84.4%**
- FinanceAgent v1.1: **60.0%** — trails Opus 4.7 (64.4%)
- CyberGym: **81.8%**

Reasoning / knowledge:

- GPQA Diamond: **93.6%** — trails Opus 4.7 (94.2%) and Gemini 3.1 Pro (94.3%)
- ARC-AGI-2 (Verified): **85.0%** — highest of any publicly available model at launch (vs. Opus 4.7 75.8%, Gemini 3.1 Pro 77.1%)
- ARC-AGI-1 (Verified): **95.0%** — Gemini 3.1 Pro leads at 98.0%
- MMLU-Pro: **92.4%**
- AIME 2026: **97.50%**
- FrontierMath Tiers 1–3: **51.7%**; FrontierMath Tier 4: **35.4%** (best in the Opus 4.7 / Gemini 3.1 Pro comparison set)
- HLE (no tools): **41.4%** — trails Opus 4.7 (46.9%); HLE (with tools): **52.2%**
- AA-Omniscience hallucination: **86%** vs. Opus 4.7's 36% — a materially worse knowledge-grounding profile
- OfficeQA Pro: **54.1%**; BixBench (bioinformatics): **80.5%**
- LiveBench: **79.91** (#1/117, DataLearner, 2026-09); AA-LCR: **84.30** (#4/170)

Long context (MRCR v2, vendor-reported curve — the strongest long-context evidence in this report):

| Range | GPT-5.5 | GPT-5.4 | Claude Opus 4.7 |
| --- | --- | --- | --- |
| 8K–16K | 93.0% | 91.4% | — |
| 32K–64K | 90.0% | 90.5% | — |
| 128K–256K | 87.5% | 79.3% | 59.2% |
| 256K–512K | 81.5% | 57.5% | — |
| 512K–1M | **74.0%** | 36.6% | 32.2% (Opus 4.6) |

- Graphwalks BFS 256k: **73.7%**; Graphwalks parents 256k: **90.1%**; **Graphwalks BFS 1M: 45.4%** vs GPT-5.4's 9.4% (~4.8×). At ≤256K, Opus 4.7 leads on both graph walks (76.9% / 93.6%).

Index / throughput:

- Artificial Analysis Intelligence Index: **60 at launch** (#1 at the time, on the v4.0-era composite); **38 on Index v4.3.2**, rank #57/216 (accessed 2026-09-29). **Conflict logged** — the composite was rebuilt, so 60 and 38 are not comparable. Artificial Analysis now only continues performance benchmarking for the default 10k-input-token workload.
- Output speed **96.2 tokens/s**; TTFT **46.15s**; 88M index output tokens (#52/216 verbosity); $4.35 blended 7:2:1 rate; **$2.63** per Intelligence Index task (Artificial Analysis).

Sources consulted: [Introducing GPT-5.5 (OpenAI, 2026-04-23)](https://openai.com/index/introducing-gpt-5-5/), [OpenAI ChatGPT & Codex changelog — GPT-5.5 retirement (2026-09-14)](https://www.codex-docs.com/en/docs/models), [OpenAI API deprecations](https://developers.openai.com/api/docs/deprecations), [GPT-5.5 retirement scope analysis (qcode.cc, rechecked 2026-10-07)](https://qcode.cc/en/gpt-5-5-codex-retirement), [TrustLoud GPT-5.5 retirement (2026-10-06)](https://trustloud.com/gpt-5-5-retirement/), [benchr GPT-5.5 review](https://benchr.org/articles/gpt-5-5-review), [TheRouter GPT-5.5](https://therouter.ai/models/openai--gpt-5.5/), [aimodelsnavi GPT-5.5](https://aimodelsnavi.com/en/models/gpt-5-5), [Model Beats GPT-5.5](https://modelbeats.com/models/gpt-5-5), [DataLearner GPT-5.5](https://www.datalearner.com/en/ai-models/pretrained-models/gpt-5-5), [honest scorecard (ton-technotes, 2026-04-24)](https://ton-technotes.com/en/blog/2026-04-24-gpt-5-5-honest-scorecard/), and [Artificial Analysis GPT-5.5](https://artificialanalysis.ai/models/gpt-5-5), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 91/100.** Raised from 85. The previous pass recorded "no verified Terminal-Bench, Tau, GDPval, or tool-call values" because the OpenAI pages were unreachable at the time; they now resolve. Terminal-Bench 2.0 **82.7%** (SOTA at launch), Tau2-bench Telecom **98.0%**, GDPval **84.9%**, OSWorld-Verified **78.7%**, BrowseComp **84.4%**. Held below the mid-90s because MCP Atlas **75.3%**, FinanceAgent **60.0%**, and Arc-AGI-1 all trail Claude Opus 4.7 — OpenAI's own table concedes the losses.
- **Reasoning: 92/100.** Raised from 82. ARC-AGI-2 Verified **85.0%** (leading all public models), FrontierMath Tier 4 **35.4%** and T1–3 **51.7%** (best in its comparison set), MMLU-Pro **92.4%**, AIME 2026 **97.5%**, GPQA Diamond **93.6%**. Deductions for the two documented weaknesses: HLE no-tools **41.4%** (below Opus 4.7) and an **AA-Omniscience hallucination rate of 86%** — the weakest knowledge-grounding profile in the frontier set.
- **Context window: 96/100.** Raised from 92. This is the largest evidence upgrade in the report. The window is officially **1,048,576 tokens** with 128K output, and — unlike nearly every other model here — GPT-5.5 publishes an actual **retrieval curve**: MRCR v2 holds 87.5% at 128–256K and **74.0% at 512K–1M**, roughly 2.3× GPT-5.4's 36.6% and far above Opus 4.6's 32.2%. Graphwalks BFS at 1M (45.4% vs 9.4%) confirms the gain. Deducted 4 points for the 272K pricing cliff and because ≤256K graph walks still lose to Opus 4.7.
- **Multimodal: 80/100.** Raised from 65. The prior pass saw only "text and image input". OpenAI documents a **natively omnimodal** architecture processing text, image, audio, and video end-to-end, with OfficeQA Pro **54.1%** and BixBench **80.5%**. Not higher because the public API surface exposes text/image input only — audio and video are architectural claims, not callable modalities on `gpt-5.5`.
- **Coding: 91/100.** Raised from 80. SWE-Bench Pro **58.6%**, Terminal-Bench 2.0 **82.7%**, SWE-bench Verified **88.7%** (or 82.6% — discrepancy logged), LiveCodeBench **85.3%**, and OpenAI's internal long-horizon Expert-SWE where it beats GPT-5.4. Held below the mid-90s by SWE-Bench Pro losing to Opus 4.7 (64.3%) — OpenAI's harder, less-memorized coding benchmark — and by the 1M retrieval drop affecting full-codebase work.
- **Cost efficiency: 33/100.** Reduced from 45. The $5/$30 rate is no longer competitive: GPT-5.6 Sol is **$4/$20** (promotional, at least through 2026-11-21), GPT-6 Sol and GPT-6.1 Sol are **$2/$10**, and even GPT-6 Astra ($10/$50) buys more capability. Beyond sticker price, **requests above 272K input tokens incur a 2× input / 1.5× output multiplier for the full session**, so long-context work — the model's headline strength — is the most expensive place to use it. Only GPT-4o's retiring replacement slot keeps it in the lineup.
- **Overall Score: 90.0/100.** (91 + 92 + 96 + 80 + 91) / 5 = 450 / 5 = 90.0, up from 80.8. The prior pass was badly under-scored purely because official sources were unreachable; with the OpenAI launch table and docs recovered, this is a frontier-tier model on every dimension except cost. **Best fit:** API-only workloads needing terminal-scale agentic coding, 1M-context retrieval, or ARC-AGI-2-class abstract reasoning. **Migration note:** anything pinned to `gpt-5.5` in a ChatGPT-signed-in Codex config, workspace default, scheduled task, or custom agent breaks on 2026-10-14 — move to `gpt-6.1-sol` / `gpt-6-sol` now. API callers are unaffected but pay a large premium for it.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of OpenAI's own launch announcement and developer documentation (previously unreachable), the ChatGPT & Codex changelog retirement entry, the API deprecations page, plus independent trackers and cross-vendor scorecards; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the Intelligence Index conflict (60 on the v4.0-era composite vs. 38 on v4.3.2) is retained rather than reconciled — the composite was rebuilt between versions. All other dimensions were re-derived from primary OpenAI sources.
- Future sources: add a new file next to this one, e.g. `GPT_55_Recheck.md`, using the same headings.