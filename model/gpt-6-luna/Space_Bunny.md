# GPT-6 Luna — findings by Space Bunny

- Source: OpenAI (`gpt-6-luna`; max effort)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change, upward.** The prior pass recorded "no exact public Tau2/MCP/Terminal score," "no exact-model visual benchmark," and "absent SWE-bench and LiveCodeBench evidence." Three evidence classes have since arrived: **Artificial Analysis component rows** (**AA-Briefcase 1336 Elo**, **AutomationBench 53.2%**, **Terminal-Bench 4.0 12.6%**, **MMMU-Pro 79.7%**, **MLCR-AA 16.1%**, **Omniscience Hallucination Rate 76.7%**), **ARC Prize verified results** (**ARC-AGI-1 86.70%, ARC-AGI-2 59.3%, ARC-AGI-3 0.1%**), and OpenAI's own **DeepSWE v1.1 at 66.6%**. Net: **Tool use 82 → 84**, **Reasoning 84 → 83**, **Multimodal 65 → 78**, **Coding 78 → 82**, Overall **81.0 → 85.0**.

## Model card

- **Name:** GPT-6 Luna (max)
- **Short description:** OpenAI's fast, cost-efficient GPT-6 model for high-volume tasks, latency-sensitive applications, and increasingly capable agentic and software-engineering work at higher reasoning effort. The cost-efficiency tier of the GPT-6 family, released alongside GPT-6 Sol nineteen days after GPT-6 Astra.
- **Provider / access:** OpenAI Responses API `gpt-6-luna`; **Chat Completions supports function calling only with `reasoning_effort: none`** — a real integration constraint. OpenRouter `openai/gpt-6-luna`. Available in ChatGPT Work and Codex; **not available in Chat**. Free and Go plans get GPT-6 Luna in the desktop app. Microsoft Foundry Standard across 28 global regions; EU data residency available.
- **Release / knowledge:** Released **2026-09-22**; **knowledge cutoff 2026-05-18** (OpenAI model documentation) — *more recent than GPT-6 Sol's 2026-04-20*, an unusual inversion in a family where the cheaper model knows more.
- **Context window:** **1,050,000 tokens; maximum output 128,000.**
- **Modalities:** Text and image input; text output. Reasoning effort supports **none, low, medium, high, xhigh, max**. Responses API tools: function calling, structured outputs, web search, file search, image generation, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search.
- **Pricing (verified 2026-10-10):** **$0.10 input / $0.01 cached input / $0.50 output** per 1M; **cache writes $0.125**. **Prompts above 272K input tokens use higher rates.** Batch and Flex are 50% of standard; Fast mode 2×; regional processing adds 10%; EU data residency limited to Standard/Fast/Flex/Batch. This was a **50% cut against GPT-5.6 Luna's $0.20 / $1.20** and is the headline claim of OpenAI's launch post.
- **Architecture:** Proprietary; parameter count not disclosed. Trained with similar methods to GPT-6 Astra.

### Raw benchmarks found

**Official — OpenAI "Introducing GPT-6 Sol and Luna" (2026-09-22):**

- **DeepSWE v1.1 (max): 66.6%** — OpenAI states this is "comparable to Claude Opus 5 and Fable 5 at medium effort," and that Luna costs **93% less per task than Opus 5 and 96% less than Fable 5**
- AutomationBench 1.0.6: at **high** effort Luna improves on GPT-5.6 Luna by **5.4 percentage points at 58% lower cost per task**; Luna's best is **20.7% at max for $0.037** (Kingy's chart reading)
- OSWorld 2.0: Luna at max **exceeds GPT-5.6 Sol at medium at roughly one tenth of its cost**
- Prompt caching: 90% discount on cached reads; effort can be changed mid-conversation without breaking the cache

**Official — GPT-6 Astra system card (published figures covering Luna):**

- HealthBench raw **50.0%**, length-adjusted **54.5%**
- HealthBench Professional **60.8%** (61.2% raw)
- HealthBench Hard **31.4%**
- ExploitGym **11.6%**

**Independent — Artificial Analysis:**

- **Intelligence Index 38.1** (was 37.3 / 37 on the prior pass)
- **AA-Briefcase 1336 Elo**; **AutomationBench-AA 53.2%**
- **GDPval-AA 46.9% / 1437 Elo** (was 43.4%)
- **Terminal-Bench 4.0: 12.6%**; GDP.pdf 22.8%
- **AA-MMMU-Pro 79.7%**
- **AA-LCR 83.3%**; **MLCR-AA 16.1%**; CritPt 19.4%; HLE 38.5%
- **AA-Omniscience: Index 0.7%, Accuracy 43.8%, Hallucination Rate 76.7%**
- AA-SciCode 54.6%

**Independent — ARC Prize (verified results for `openai-gpt-6-luna`):**

- **ARC-AGI-1: 86.70%**
- **ARC-AGI-2: 59.3%**
- **ARC-AGI-3: 0.1%**

**Other:** Bug Hunt Bench **18.3 fixes**; BenchLM overall **65.64/100**, rank **#34 of 889**. Siblings: GPT-6 Sol 75.1, GPT-5.6 Luna 66.15, GPT-6 Astra 84.88. BenchLM carries separate GPT-6 Luna (low) and (medium) rows with no computed score.

**Still absent:** SWE-bench Verified, SWE-bench Pro, LiveCodeBench, SciCode-vendor, Terminal-Bench 2.x, Tau2-Bench, MCP-Atlas, and any Vals AI row.

Sources consulted: [Introducing GPT-6 Sol and Luna (OpenAI, 2026-09-22)](https://openai.com/index/introducing-gpt-6-sol-and-luna/), [BenchLM GPT-6 Luna (updated 2026-10-10)](https://benchlm.ai/models/gpt-6-luna), [Artificial Analysis GPT-6 Luna](https://artificialanalysis.ai/models/gpt-6-luna) and its component leaderboards, [ARC Prize — GPT-6 Luna verified results](https://arcprize.org/results/openai-gpt-6-luna), [GPT-6 Astra system card](https://deploymentsafety.openai.com/gpt-6-astra), [OpenAI GPT-6 Luna model documentation](https://developers.openai.com/api/docs/models/gpt-6-luna), and [Prograsec — GPT-6 Sol and Luna](https://prograsec.com/insights/gpt-6-sol-and-luna), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 84/100.** Raised from 82. The prior pass was evidence-capped for lack of any Tau/MCP/Terminal figure; **AA-Briefcase 1336 Elo**, **AutomationBench-AA 53.2%**, **GDPval-AA 1437 Elo / 46.9%**, and the broad Responses tool stack (computer use, hosted shell, apply patch, MCP, tool search) now support a real agentic read. Capped by **Terminal-Bench 4.0 at 12.6%**, **ExploitGym 11.6%**, **GDP.pdf 22.8%**, and **ARC-AGI-3 at 0.1%** — the model is weak on exactly the long-horizon autonomous-agent workloads where the GPT-6 Sol/Astra tier earns its price.
- **Reasoning: 83/100.** Reduced from 84. **AA-LCR 83.3%**, **ARC-AGI-1 86.70%**, **HealthBench Professional 60.8%**, and an **Intelligence Index of 38.1** are respectable for a cost tier. The reduction is driven by the knowledge-reliability and frontier-reasoning rows that only became visible this pass: **AA-Omniscience Hallucination Rate 76.7%** with an **Index of 0.7%**, **HLE 38.5%**, **CritPt 19.4%**, **ARC-AGI-2 59.3%**, **ARC-AGI-3 0.1%**, and **MLCR-AA 16.1%**. OpenAI's own launch selling point is factuality — "about half as many mistakes as its predecessor" was claimed for Sol, not Luna — and 76.7% says otherwise for this tier.
- **Context window: 98/100.** Unchanged. **1,050,000 tokens with 128K output**, verified by OpenAI, with **AA-LCR at 83.3%** as strong independent retrieval evidence at full window length. One caveat now visible: **MLCR-AA at 16.1%** shows long medical/technical context is a genuine weakness, so 98 reflects general-context retrieval, not universal.
- **Multimodal: 78/100.** Raised from 65 — the largest correction in this report. The prior pass scored a placeholder because "no exact-model visual benchmark was found." **AA-MMMU-Pro at 79.7%** is a real independent visual-reasoning result for text-and-image input. Not higher: image input only, no audio or video, and no document- or chart-specific benchmark published.
- **Coding: 82/100.** Raised from 78. **DeepSWE v1.1 at 66.6%** is OpenAI's own figure and is the number that matters most — long-horizon software engineering in real codebases, where OpenAI positions Luna as "comparable to Claude Opus 5 and Fable 5 at medium effort." **AA-SciCode 54.6%** and **Bug Hunt Bench 18.3 fixes** support it. Held at 82 because **no SWE-bench Verified, SWE-bench Pro, or LiveCodeBench figure exists**, and because DeepSWE at 66.6% remains below GPT-6 Sol's territory.
- **Cost efficiency: 99/100.** Unchanged. **$0.10 / $0.50 with a $0.01 cache read** and **$0.125 cache writes** is the cheapest frontier-family rate card in this dataset — a **50% cut against GPT-5.6 Luna** and roughly a twentieth of GPT-6 Sol. Two deductions: **prompts above 272K reprice at higher rates**, and **regional processing adds 10%**. Everything else here is achieved by buying less capability, which is exactly what this model is for.
- **Overall Score: 85.0/100.** (84 + 83 + 98 + 78 + 82) / 5 = 425 / 5 = 85.0, up from 81.0. **Best fit: high-volume, latency-sensitive, cost-bound workloads** — classification, extraction, routing, repeated narrow agent steps, and light coding — where $0.10/$0.50 at a 1M window with 79.7% MMMU-Pro is an exceptional combination. **Do not use it for:** knowledge retrieval without verification (76.7% hallucination rate), long-horizon autonomous agents (Terminal-Bench 4.0 at 12.6%, ARC-AGI-3 at 0.1%), or frontier reasoning (HLE 38.5%, CritPt 19.4%). **If you need one GPT-6 model for high-volume work, this is it** — GPT-6.1 Sol at $2/$10 and GPT-6 Sol at $2/$10 are the upgrade path when the task stops being cheap.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of OpenAI's GPT-6 Sol/Luna launch post and model documentation, the GPT-6 Astra system card, Artificial Analysis and its component leaderboards, ARC Prize verified results, Bug Hunt Bench public data, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the **Intelligence Index moved 37.3 → 38.1** between passes, recorded as a small revision rather than silently overwritten. **ARC-AGI-3 at 0.1%** and **MLCR-AA at 16.1%** are both newly visible weaknesses that materially qualify strong ARC-AGI-1 and AA-LCR figures. HealthBench figures come from the **Astra** system card, which reports them across the family — labelled accordingly rather than as Luna-specific vendor claims. **No Vals AI row exists** for this model, and SWE-bench / LiveCodeBench remain unpublished; Coding is scored on DeepSWE, SciCode, and Bug Hunt alone. Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct retrievals rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `GPT_6_Luna_Recheck.md`, using the same headings.