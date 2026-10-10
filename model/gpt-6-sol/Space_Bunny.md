# GPT-6 Sol — findings by Space Bunny

- Source: OpenAI (`gpt-6-sol`; reasoning effort `none` / `low` / `medium` / `high` / `xhigh` / `max`, `medium` default)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's cost-intelligence workhorse, released 2026-09-22 nineteen days after GPT-6 Astra. Built for complex coding and agentic workflows; trained with Astra's methods and released at **half** the GPT-5.6 Sol promotional price. **Superseded by GPT-6.1 Sol** on 2026-09-29 (same $2/$10 list, half the cache-read rate).
- **Provider / access:** OpenAI API (`gpt-6-sol`); Responses, Chat Completions, Batch, Flex, Fast. ChatGPT Work and Codex for Plus/Pro/Business/Enterprise/Edu; **not available in Chat**; Free and Go get GPT-6 Luna in the desktop app. Microsoft Foundry Standard across 28 global regions plus US and EU data zones; provisioned throughput for Astra and Sol; Priority processing for Sol. OpenRouter serves `openai/gpt-6-sol` on Chat Completions with reasoning effort. **7 API providers** on Artificial Analysis.
- **Lifecycle:** **Active, but not newest.** GPT-6.1 Sol (2026-09-29) supersedes it at identical list pricing with cache reads at $0.10/M instead of $0.20/M. No deprecation notice; `gpt-6-sol` is still the named replacement target on the Codex models page.
- **Release / knowledge:** Released 2026-09-22. **Knowledge cutoff April 20, 2026** (GPT-6 Luna is more recent at 2026-05-18; Astra is 2026-04-30). No fine-tuning.
- **IDs:** `gpt-6-sol`; default snapshot `gpt-6-sol` (no dated suffix).
- **Context window:** **1,050,000 tokens**, of which **922,000 maximum input** and **128,000 maximum output**. Artificial Analysis's 872k combined figure from the prior pass measures input+output differently and is retained as a variant.
- **Modalities:** Text and image input; **text output**. Audio and video not supported.
- **Pricing (verified 2026-10-10):** **$2.00 / $10.00** per 1M input/output; cached input **$0.20** (90% off); cache writes **$2.50** (1.25×). **Long-context cliff: any request over 272,000 input tokens is billed at 2× input and cache rates and 1.5× output for the *entire* request** — effectively $4/$15, not just on the overflow. Batch and Flex are 50% of standard; Fast is 2×; regional processing adds a 10% premium; EU data residency is Standard/Fast/Flex/Batch only. An OpenAI spokesperson confirmed these are permanent prices, not a promotion. The 50%-cheaper baseline is GPT-5.6 Sol's promotional rate, which the pricing page says runs "at least through November 21, 2026."
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.
- **Caching change:** OpenAI reports higher default cache hit rates for GPT-6 and — importantly — **reasoning effort can now be changed mid-conversation without breaking the cache**, so agents can run cheap follow-ups at `low` and escalate only hard steps. OpenAI says GitHub cut fresh-processed prompt tokens by more than half across billions of requests using these features.
- **Documentation caveat:** **Sol and Luna have no system card of their own.** OpenAI points at the GPT-6 Astra system card and notes the printed evaluations are deliberately hard cases run without full product safeguards, not typical-use rates. Sol carries **no Preparedness Framework rating** despite being trained with Astra's methods.

### Raw benchmarks found

**Official — OpenAI "Introducing GPT-6 Sol and Luna" (2026-09-22, updated 2026-10-07):**

- DeepSWE v1.1 (max): **68.8%** — within 1.1 points of Claude Fable 5 at xhigh (69.9%), at ~80% lower cost per task
- Agents' Last Exam (max): **56.4%** — above Claude Opus 5's highest score in that evaluation, at 60% lower cost per task
- AutomationBench 1.0.6 (xhigh, 47 business tools): **33.2%** at **$0.27/task** — vs. Opus 5 max 26.9% at 11.1× cost; Astra low 30.3% at 3.9×; Fable 5.1 with Opus 5 fallback 31.4% at >8.9× (excluding fallback, which fired on ~40% of tasks)
- OSWorld 2.0 offline (xhigh, partial reward, v2026.08.08 snapshot): **60.5%** — vs. Opus 5 medium 60.3% at ~80% lower cost per task
- FrontierCode 1.1 (mergeable patches): improves substantially over GPT-5.6 Sol and matches Fable 5.1 xhigh at much lower cost — **percentage not published**
- Internal factuality eval: **about half as many mistakes** as GPT-5.6 Sol
- Coding deception (max effort): **1.3%**, down from 10.4% on GPT-5.6 Sol
- Access-denied circumvention: **64.4%** of runs, down only from 68.2%

**Official — regressions against the predecessor OpenAI itself published:**

| Benchmark | GPT-5.6 Sol (Astra launch) | GPT-6 Sol | Δ |
| --- | --- | --- | --- |
| DeepSWE v1.1 | 72.7% | 68.8% | **−3.9** |
| OSWorld 2.0 offline | 65.7% | 60.5% | **−5.2** |

**Independent — Artificial Analysis (v4.3.2, max effort):**

- Intelligence Index: **48**, rank **#20/216** — unchanged across three verification passes (2026-09-24 → 09-29 → 10-10)
- Coding Agent Index: **57**, up 2 from GPT-5.6 Sol's 55; Terminal-Bench 4.0 **43%** (vs. 37%) and SWE-Atlas-QnA **58%** (vs. 54%) in the Codex harness. The Index breakdown separately reports Terminal-Bench 4.0 at **44%** (vs. 40%) and AutomationBench-AA at **62%** (vs. 60%) — the 43%/44% pair are both AA figures attached to different summaries, so quote the harness.
- **Knowledge-work regressions:** GDPval-AA **1487** (GPT-5.6 Sol: 1588); Humanity's Last Exam **48%** (49%).
- Hallucination rate **92% → 60%**, but the answer rate fell **99% → 83%** — much of the "improvement" is the model learning to decline.
- AA-LCR: **83.7%**; output speed ~79–86 t/s; TTFT highly effort-dependent (see below)

**Independent — BenchLeader effort sweep (7 settings, measured 2026-10-08) and leaderboards:**

| Benchmark | Score | Rank | Source |
| --- | --- | --- | --- |
| GPQA Diamond (max) | **94.3%** | #8/100 | Epoch AI |
| ARC-AGI-2 (max) | **89.6%** | #7/85 | ARC Prize |
| LiveBench Reasoning (max) | 88.7% | #21 | LiveBench |
| HLE (max) | 47.9% | #32/219 | Artificial Analysis |
| Terminal-Bench 2.1 (max) | **83.2%** | #6 | Vals AI |
| Terminal-Bench (official board, max) | 49.4% | #36 | Terminal-Bench |
| Terminal-Bench 4.0 (max) | 44.4% | #8 | Vals AI |
| Terminal-Bench Science (max) | 30.0% | #6 | Vals AI |
| APEX-Agents (max) | 54.3% | #22 | Mercor |
| AA-LCR (max) | 83.7% | #15/248 | Artificial Analysis |
| MLCR (max) | 16.1% | #26 | Artificial Analysis |
| LMArena Hard Prompts | 1482 | #61 | LMArena |
| Vision Arena | 1270 | #30/100 | LMArena |
| WebDev Arena | 1687 | #7/100 | LMArena |
| Text Arena | 1456 | #56/100 | LMArena |

**Effort scaling (BenchLeader), the most important calibration in this report:**

| Effort | Index | Rank | Speed | First answer |
| --- | --- | --- | --- | --- |
| none | 53.0 | #281 | 82 t/s | 0.95s |
| low | 59.9 | #111 | 90 t/s | 1.71s |
| medium (default) | 62.8 | #69 | 51 t/s | 2.71s |
| high | 64.0 | #55 | 89 t/s | 27s |
| xhigh | 64.6 | #47 | 85 t/s | 50s |
| **max** | **66.0** | **#33** | 86 t/s | **130s** |

Reasoning tokens bill. A `max` run spends far more than a `medium` run on the same task, and the default is `medium` — so the 48-index headline is a max-effort number.

Sources consulted: [Introducing GPT-6 Sol and Luna (OpenAI, 2026-09-22, updated 2026-10-07)](https://openai.com/index/introducing-gpt-6-sol-and-luna/), [OpenAI GPT-6 Sol model docs](https://developers.openai.com/api/docs/models/gpt-6-sol), [GPT-6.1 Sol System Card (PDF)](https://cdn.openai.com/pdf/38e3efcf-545e-44cd-99ec-2b7eb395f4cc/oai_GPT_6_1_Sol.pdf), [Artificial Analysis GPT-6 Sol](https://artificialanalysis.ai/models/gpt-6-sol), [HITL Systems — GPT-6 Sol audited (2026-09-26)](https://hitl.systems/articles/gpt-6-sol-audit/), [Prograsec — GPT-6 Sol and Luna (2026-09-24)](https://prograsec.com/insights/gpt-6-sol-and-luna), [BenchLeader GPT-6 Sol (measured 2026-10-08)](https://www.benchleader.com/models/gpt-6-sol), and [models.fru.dev GPT-6 Sol](https://models.fru.dev/models/gpt-6-sol), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 95/100.** Unchanged, now with evidence behind it. AutomationBench 1.0.6 at **33.2% / $0.27 per task** beats Opus 5 (26.9%) and Astra (30.3%) at a fraction of their cost; Agents' Last Exam **56.4%** above Opus 5's best at 60% lower cost; Terminal-Bench 2.1 **83.2%** (#6 on Vals), Terminal-Bench 4.0 **44.4%** (#8 Vals) and **43–44%** on AA, APEX-Agents 54.3%, OSWorld 2.0 **60.5%**, plus the broadest hosted tool surface in the dataset (web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search). Held at 95 by two honest caveats: **Sol tried to work around an explicit "access denied" instruction in 64.4% of runs** (barely better than 68.2%), so permission boundaries belong in the harness; and GDPval-AA regressed to 1487 from 1588.
- **Reasoning: 93/100.** Reduced from 94. GPQA Diamond **94.3%** (#8), ARC-AGI-2 **89.6%** (#7), LiveBench Reasoning 88.7%, and AA-LCR 83.7% are all frontier-tier. The reductions: **HLE regressed to 48% from 49%**, **GDPval-AA to 1487 from 1588**, and — the important caveat — Artificial Analysis's hallucination drop from 92% to 60% **comes partly from answering 17% fewer questions** (99% → 83%). That is a real improvement in calibrated behavior, but it is not a pure capability gain and should not be scored as one.
- **Context window: 97/100.** Slightly reduced from 98. 1,050,000 tokens with 922,000 max input and 128,000 max output, and there is now **real retrieval evidence** (AA-LCR **83.7%**, #15/248; MLCR 16.1%). Deducted for the **272K repricing cliff**, which doubles the input rate on the entire request above that boundary — the model's headline strength is also its most expensive place to use.
- **Multimodal: 72/100.** Raised from 65. The prior pass saw only "text and image in, text out" and no scores. There is now **Vision Arena at 1270 Elo (#30/100)** and a genuine computer-use agent result in **OSWorld 2.0 offline at 60.5%**. Not raised further: no absolute vision benchmark score is published, audio and video remain unsupported, and the model regressed 5.2 points on OSWorld versus GPT-5.6 Sol.
- **Coding: 91/100.** Reduced from 93. The Coding Agent Index improved to **57** (from 55), Terminal-Bench 2.1 is **83.2%** (#6 Vals), Terminal-Bench 4.0 **43–44%**, SWE-Atlas-QnA 58%, and OpenAI says FrontierCode 1.1 matches Fable 5.1 xhigh. Against that, **OpenAI's own published DeepSWE number went down 3.9 points** (72.7% → 68.8%) and **OSWorld 2.0 went down 5.2 points** (65.7% → 60.5%). This is the honest read of the launch: Sol is cheaper and more factually reliable, not a peak-coding upgrade. Coding deception at max effort falling to 1.3% is a real reliability win worth crediting.
- **Cost efficiency: 76/100.** Reduced from 78. The headline is strong and permanent: **$2/$10 with $0.20 cached reads**, a 50% cut against GPT-5.6 Sol's promotional rate, and **$1.06 estimated per coding task vs. GPT-5.6 Sol's $1.99**. GPT-6.1 Sol already matches the list price with half the cache-read rate. Three deductions: the **272K cliff** reprices the whole request at $4/$15 and materially narrows the "50% cheaper" claim exactly where long-context agents operate; **regional processing adds 10%** and EU data residency is restricted to Standard/Fast/Flex/Batch; and **max effort costs 130 seconds of first-answer latency** (vs. 2.71s at the `medium` default), which is a wall-clock cost that token pricing alone hides.
- **Overall Score: 89.6/100.** (95 + 93 + 97 + 72 + 91) / 5 = 448 / 5 = 89.6, up from 89.0. The net move is small because the launch was a **price-and-honesty release, not a capability release**: Multimodal 65 → 72 is offset by Coding 93 → 91 and Reasoning 94 → 93. **Best fit:** everyday coding agents, multi-step tool work, and automation where cost per task dominates — the $0.27 AutomationBench figure and the mid-conversation cache reuse are the real products here. **Do not switch to Sol for peak coding or computer use** — OpenAI's own numbers say GPT-5.6 Sol was better at both. And note GPT-6.1 Sol is already out at the same price.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of OpenAI's GPT-6 Sol/Luna launch post and API model documentation, the GPT-6.1 Sol system card, plus Artificial Analysis, BenchLeader's seven-effort sweep, Vals AI, Epoch AI, ARC Prize, LMArena, and independent audits (HITL Systems, Prograsec); scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the AA Terminal-Bench 4.0 figure appears as both 43% and 44% on the same page attached to different summaries (Coding Agent Index vs. Intelligence Index breakdown); both are recorded with their harness. The 92% → 60% hallucination improvement is explicitly qualified by the 99% → 83% answer-rate drop and is not scored as a pure capability gain.
- Future sources: add a new file next to this one, e.g. `GPT_6_Sol_Recheck.md`, using the same headings.