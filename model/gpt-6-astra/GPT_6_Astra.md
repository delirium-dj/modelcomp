# GPT-6 Astra — findings by ChatGPT 6 Astra

- Source: OpenAI/GPT-6 Astra (`gpt-6-astra`).

- Date: 2026-09-25 (UTC)

- Overview and scoring methodology: `../../model-comparison.md`

- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra — paid; no Free-tier ID listed in the checked OpenCode Zen documentation.

- **Short description:** OpenAI’s reasoning model for coding, research, document workflows, and computer use. This file covers `gpt-6-astra`; Artificial Analysis’s “max” designation identifies its reasoning-effort configuration, not a separate API model ID.

- **Provider / access:** OpenAI API `gpt-6-astra` supports Chat Completions and Responses, but tool calling requires Responses. OpenCode Zen exposes `opencode/gpt-6-astra` through its Responses endpoint.

- **Release / knowledge:** Released **2026-09-03**; knowledge cutoff **2026-04-30**. Release verified against OpenAI’s system card; cutoff against its API model documentation.

- **IDs:** `openai/gpt-6-astra`; `opencode/gpt-6-astra`. Wire-level model ID: `gpt-6-astra`. No GPT-6 Astra Free ID is published in the checked Zen catalog.

- **Context window:** **1,050,000 total tokens**, with **128,000 maximum output tokens**, verified in OpenAI’s model documentation—not through local API testing. A separate input-only ceiling was not verified.

- **Modalities:** Text/image/PDF input; text output. Native audio/video input is unsupported. Reasoning: yes. Tool calls: yes, through Responses. JSON: Structured Outputs supported; legacy JSON-object mode was not separately verified. PDF support is demonstrated using this exact ID in OpenAI’s file-input documentation.

- **Pricing (as of 2026-09-25):** **Paid**, per **1M tokens**. Standard requests with input **≤272K**: **$10 input / $50 output / $1 cached read / $12.50 cache write**. Above **272K input**: **$20 / $75 / $2 / $25**, respectively, for the full request. Cost efficiency below evaluates the standard, uncached tier. Free-tier privacy caveat: not applicable; no Astra Free ID was verified.

- **Architecture:** Proprietary, closed weights. Parameter count is undisclosed; active parameters and MoE status were not verified. No public open-weights license was found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.3%** — BenchLM’s verified Vals-run record; identified as its best verified row. Effort and detailed harness settings are not exposed in that record. This is not Terminal-Bench 4.0.

- Tau3-Banking / Tau2-Bench: Tau3-Banking **41.4%**, **#11/14** on BenchLM’s Artificial Analysis mirror, updated **2026-09-22**; effort unspecified in the mirrored row. Tau2-Bench: no verified public score found.

- GDPval-AA: **1542 Elo** — Artificial Analysis **GDPval-AA v2.1**, `max`; Stirrup agentic harness with shell and browsing. Rank was not exposed for this model in the retrieved comparison table.

- Claw-Eval / ClawProBench: no verified public score found.

- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathon: no verified public score found; MCP-Atlas: no verified public score found. **SWE-Atlas-QnA: 62%**, Artificial Analysis’s Codex-agent evaluation published **2026-09-09**; individual benchmark rank not reported.

Reasoning / knowledge:

- GPQA Diamond: **96.0%** — OpenAI’s best-reported-effort launch evaluation; BenchmarkList lists **#1/464**.

- HLE: **55%** — Artificial Analysis, `max`, as displayed at whole-percent precision; the comparison table does not specify tool settings. Separately, OpenAI reports **57.2% with tools**; BenchmarkList lists that result at **#7/466**. These are distinct evaluation configurations.

- LCR / MLCR: **AA-LCR v1.1: 81%**, Artificial Analysis, `max`, displayed at whole-percent precision. MLCR-AA overall: no verified public score found. A separate MLCR-AA submetric is verified: **98.3% accuracy among judged responses**, **#1**, `max`; it excludes overlong/empty responses and is **not** the overall pass rate.

- CritPt: **32%** — Artificial Analysis, `max`, displayed at whole-percent precision. The benchmark is explicitly marked **under review**.

- Artificial Analysis Intelligence Index / BenchLM overall: **53 / #6 of 211** — AA **v4.3.2**, `max`, using the model page’s displayed comparison class, not a universal model ranking. Separately, BenchLM publishes **88.69 / #1 of 194**, BenchAlign **v5.7**, snapshot **2026-09-24**. Neither aggregate is substituted for this repository’s Overall Score.

- Omniscience Accuracy / Hallucination Rate: **62.6% / 51%**. Accuracy: BenchLM’s AA mirror, **#4/195**, updated **2026-09-24**, effort unspecified. Hallucination: AA’s **2026-09-09** report, `max`. These are separately sourced snapshots; AA defines hallucination rate over non-correct responses, not as one minus accuracy.

Coding:

- SWE-bench Verified / SWE-Pro: Verified: no verified public score found; SWE-Pro: no verified public score found. An official SWE-Bench Pro V2 model entry surfaced, but its numerical result could not be verified from the retrieved page.

- LiveCodeBench: no verified public score found. The retrieved official leaderboard did not expose an exact-model numerical result.

- SciCode / AA-SciCode: **56%** — Artificial Analysis, `max`, displayed at whole-percent precision; rank not displayed in the comparison table.

- Vibe Code Bench: **89.59%**, **#4/103** — BenchLM’s mirror of **Vals Vibe Code Bench v1.1**, **OpenHands** harness, Vals snapshot **2026-09-22**. This is not the separately named Vibe Code Bench 1–100 evaluation.

- DeepSWE / Coding Index / other: **DeepSWE v1.1: 74.1%**, OpenAI’s best-reported-effort result; BenchmarkList **#2/33**. Separately, AA reports **DeepSWE 68%** and **Coding Agent Index 62** in **Codex**, tied first in its **2026-09-09** publication snapshot—not a verified current rank. AA’s current comparison also displays **Terminal-Bench 4.0: 59%**, `max`. Harnesses and benchmark versions are not interchangeable.

Long context:

- **OpenAI MRCR v2, 8-needle:** **100.0% at 256K–512K** and **96.3% at 512K–1M**, vendor-reported. BenchmarkList ranks the respective rows **#1/8** and **#2/9**. These are window-range results, not proof of perfect retrieval at the maximum documented context.

### Normalized scores (1-100)

- **Tool use: 88/100.** Near-frontier terminal performance and strong computer-use evidence, including OpenAI’s **72.6% OSWorld 2.0** result on the **v2026.08.08 offline, partial-score** configuration. Banking and GDPval results fall below the supplied frontier anchors, preventing a higher score.

- **Reasoning: 94/100.** GPQA and HLE clear the supplied frontier anchors. Long-context reasoning and factual-reliability limitations cap the interpretation; CritPt’s review status further limits confidence. Current AA index results are kept version-specific rather than mixed with launch-era index values.

- **Context window: 99/100.** Falls in the verified **≥1M** documentation tier, with vendor retrieval testing through the **512K–1M** range. That range’s **96.3%** does not meet the required **98%** retrieval condition for awarding 100; the perfect lower-range result does not establish that condition.

- **Multimodal: 80/100.** Text, image, and PDF input qualify for the supplied PDF-input tier. Native audio/video input and native non-text output are absent; image-generation tools are not counted as native model output.

- **Coding: 92/100.** Published DeepSWE, SciCode, and terminal results support the frontier band. The lower independent Codex DeepSWE result, harness sensitivity, and unresolved SWE-bench/LiveCodeBench numerical verification prevent a higher score.

- **Cost efficiency: 30/100.** Matches the supplied **$10 input / $50 output per 1M** paid-tier anchor. Caching changes realized expenditure, and long-input requests cost more. Cost efficiency is excluded from Overall.

- **Overall Score: 90.6/100.** v4: **(88 + 94 + 99 + 80 + 92) / 5 = 90.6**, half-up rounded to one decimal; cost excluded. Best-fit interpretation: high-budget, long-context coding, research, and document agents rather than native voice/video applications.

---

## Signature

- Provided by: **ChatGPT (openai/gpt-6-astra)** — 2026-09-25

- Method: Fresh public internet research; no private benchmark execution or prior-chat scores used. `openai/undisclosed` records unavailable signing-runtime metadata, not an asserted API model ID. Vendor results reflect best reported effort, while independently evaluated configurations and harnesses remain separately labeled. Missing findings mean not numerically verified in retrieved sources, not zero performance. Source-displayed precision is preserved; scores are normalized 1-100 interpretations, not official vendor scores.

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
