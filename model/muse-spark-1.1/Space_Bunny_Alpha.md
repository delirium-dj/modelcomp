# Muse Spark 1.1 — findings by Space Bunny Alpha

- Source: Meta (`Muse Spark 1.1`; reasoning)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's proprietary multimodal reasoning model for coding, multimodal knowledge work, and long-horizon agents; the original version of the Muse Spark family. **Deprecated:** Meta's model documentation lists 1.3 as the recommended version and 1.2 as the previous one; 1.1 is the original and is no longer the recommended route. Successor: **Muse Spark 1.2**.
- **Provider / access:** Meta Model API (`muse-spark-1.1`); also listed on the OpenCode Zen `opencode/muse-spark-1.1` route, and re-verified on 2026-09-29 on Meta Model API, Vercel AI Gateway (`meta/muse-spark-1.1`), and AIHubMix. **No Zen Free route exists** for this model — no free ID was found on the Zen catalog, and it is a paid provider route.
- **Release / knowledge:** Released **July 9, 2026** (Meta launch blog, Vercel AI Gateway). No knowledge cutoff was shown in the reviewed sources.
- **IDs:** `muse-spark-1.1` on Meta Model API; `meta/muse-spark-1.1` on gateway routes; OpenCode Zen ID `opencode/muse-spark-1.1`.
- **Context window:** **1,048,576 tokens** (Meta Model API models page, verified 2026-09-29), with completions up to 1,048,576 tokens per request. BenchLM reports 1M. Exact input/output split is not separately capped.
- **Modalities:** **Text, image, video, audio, and PDF input; text output** (Meta Model API models page, verified 2026-09-29). This corrects the earlier text-and-image-only reading in this report: speech/audio and video input are both explicitly documented for `muse-spark-1.1`. Reasoning, streaming, tool calling, web search, URL context, code interpreter, computer use, file search, memory tool, structured outputs, citations, prompt caching, background mode, and server-side sessions are supported.
- **Pricing (as of 2026-09-29):** **$1.25 per 1M input tokens and $4.25 per 1M output tokens** — **verified** on Vercel AI Gateway and Meta's Muse Spark pricing page (the same $1.25 / $4.25 schedule carries across Muse Spark 1.1, 1.2, and 1.3). AIHubMix lists a higher reseller rate of $1.375 / $4.675. Paid; no free tier.
- **Architecture:** Proprietary; Meta has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- BenchLM overall: **66.4/100**, rank **#22/196** (BenchLM, accessed 2026-09-24; composite)
- Terminal-Bench 2.1: **80.0%** (BenchLM, provider-exact Meta evaluation report)
- OSWorld-Verified: **80.8%**; OSWorld 2.0: **14.2%** (BenchLM, provider-exact Meta evaluation report; different benchmark versions)
- Toolathlon: **75.6%** (BenchLM, provider-exact Meta evaluation report)
- WebArena-Verified: **69%**; CyberGym: **59.0%**; Finance Agent v2: **57.2%** (BenchLM, provider-exact Meta evaluation report)
- GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **91.2%** (BenchLM, Vals AI leaderboard)
- HLE with tools: **62.1%**; HLE without tools: **52.2%** (BenchLM, provider-exact Meta evaluation report)
- MMLU-Pro (Vals): **88.7%** (BenchLM, Vals AI leaderboard)
- MRCR 1M: **54.1%** (BenchLM, provider-exact Meta evaluation report)
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Pro: **61.5%** (BenchLM, provider-exact Meta evaluation report)
- SWE-bench (Vals AI): **82.0%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench (Vals AI): **85.9%** (BenchLM, Vals AI leaderboard)
- DeepSWE: **53.3%** (BenchLM, provider-exact Meta evaluation report)
- Terminal-Bench 2.1: **80.0%**
- SciCode, Vibe Code Bench, and exact SWE-bench Verified: **no verified public exact value found**

Long context:

- MRCR 1M: **54.1%** (BenchLM, provider-exact Meta evaluation report)
- Native context capacity: **1,048,576 tokens** (Meta Model API models page, verified 2026-09-29)

Throughput / latency: **withdrawn.** No Artificial Analysis speed or latency figure for this exact version could be verified on the 2026-09-29 re-run; the gateway-side TTFT and throughput numbers returned by resellers (AIHubMix, Vercel AI Gateway) are measured on those resellers' own routes, not on Meta's first-party API, so they are recorded as **N/A** rather than as model speed.

Sources consulted: [Meta Model API models page](https://dev.meta.ai/docs/models), [Meta "Introducing Muse Spark 1.1"](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api), [Meta Muse Spark pricing](https://developer.meta.com/ai/models/muse-spark-1-2/), [Vercel AI Gateway Muse Spark 1.1](https://vercel.com/ai-gateway/models/muse-spark-1.1/about), [BenchLM Muse Spark 1.1 profile](https://benchlm.ai/models/muse-spark-1-1), and the OpenCode Zen documentation, accessed 2026-09-29. The public Zen catalog still does not expose a distinct free Muse Spark 1.1 entry.

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 80.0%, Toolathlon 75.6%, WebArena 69%, and OSWorld-Verified 80.8% provide strong measured agent evidence; missing Tau, GDPval, and MCP values cap certainty.
- **Reasoning: 88/100.** GPQA 91.2%, HLE 62.1% with tools, MMLU-Pro 88.7%, and the 66.4 composite support strong reasoning; missing LCR/CritPt values cap confidence.
- **Context window: 95/100.** The 1,048,576-token context is verified on Meta's own model page and MRCR 1M 54.1% is a direct long-context measurement.
- **Multimodal: 80/100.** **Raised from 65.** Meta's Model API documentation explicitly lists **text, image, video, audio, and PDF input with text output** for `muse-spark-1.1`, so this is full-omni input rather than the image-only band the earlier text/image reading implied; held below the top band because there is still no non-text output modality and no published image-, video-, or audio-understanding benchmark.
- **Coding: 91/100.** SWE-bench Vals 82.0%, LiveCodeBench Vals 85.9%, SWE-bench Pro 61.5%, and DeepSWE 53.3% show strong coding; exact Verified/SciCode values are missing.
- **Cost efficiency: 75/100.** The verified $1.25 / $4.25 rate is a normal paid-provider price that sits below the methodology's roughly $3/$15 ≈ 60 reference but above the free tier; the 1.25 → 4.25 output multiplier is the main cost risk on agent loops.
- **Overall Score: 89.6/100.** (94 + 88 + 95 + 80 + 91) / 5 = 448 / 5 = 89.6. Best fit: multimodal coding and long-horizon tool agents that need audio, video, and PDF input on a 1M window; prefer the successor Muse Spark 1.2 or 1.3 for new work, since 1.1 is deprecated.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Meta's official Model API documentation and pricing pages, the BenchLM provider-exact evaluation record, Vercel AI Gateway, and the OpenCode model catalog; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
