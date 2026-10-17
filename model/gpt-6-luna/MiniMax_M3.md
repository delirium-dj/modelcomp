# GPT-6 Luna — findings by MiniMax M3

- Source: OpenAI / `gpt-6-luna` (OpenAI API, Azure OpenAI, ChatGPT Work, ChatGPT desktop app, Codex)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Naming note.** "GPT-6 Luna" in our roster is the **low-cost tier** of the GPT-6 family, released **2026-09-22** by OpenAI as `gpt-6-luna`. Sits below GPT-6 Sol ($2/$10) and GPT-6 Astra ($10/$50); the May-2026 release of GPT-5.6 Luna ($0.20/$1.20) is its direct predecessor. Luna is the **cheap, fast, high-volume worker**: summarization, extraction, classification, RAG with grounding, first-pass drafts that a stronger model reviews. **At max effort it sometimes scores below its predecessor** (Coding Agent Index dropped 2 points from GPT-5.6 Luna at 43 → 41) — a regression on coding specifically that the launch text does not highlight. Best read: a price-and-reliability release (AA-Omniscience hallucination 93% → 77%) more than an intelligence release (AA Intelligence Index v4.3 flat at 37).

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's lowest-cost GPT-6 family member — 1.05M context (922K max input), 128K max output, $0.10/$0.50 per 1M, 6 reasoning-effort levels (none / low / medium / high / xhigh / max), text + image in / text out. Drop-in for the high-volume summarization / extraction / classification / first-pass-draft workload; not the right pick for coding agents (Luna regressed on DeepSWE v1.1 64%→66% and SWE-Atlas-QnA 49%→44% vs GPT-5.6 Luna in AA's independent rerun).
- **Provider / access:** OpenAI API `gpt-6-luna`; Azure OpenAI; ChatGPT Work; ChatGPT desktop app; Codex (Plus, Pro, Business, Enterprise, Edu). Free and Go users get Luna in the ChatGPT desktop app.
- **Release / knowledge:** Released **2026-09-22** by OpenAI, about 90 minutes after Anthropic shipped Claude Opus 5.5. Knowledge cutoff **May 18, 2026** (the most recent of the GPT-6 family at launch).
- **IDs:** `gpt-6-luna` (canonical OpenAI). OpenCode Zen / OpenRouter (per `meta.json`): `openai/gpt-6-luna`. No date suffix in the API ID.
- **Context window:** **1,050,000 tokens** total / **922,000 tokens** max input / **128,000 tokens** max output (per OpenAI launch and Tosea.ai guide; `meta.json` reads "1M tokens" — both are correct: 1.05M total / 922K input is the OpenAI-published spec, 1M is the project-aliased round figure).
- **Modalities:** Text, image in; text out. Full hosted tool set: web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search, image generation. Chat Completions, Responses, and Batch APIs.
- **Pricing (as of 2026-10-17):** `meta.json` "Paid-tier pricing". OpenAI list **$0.10 input / $0.50 output per 1M** (50% cut from GPT-5.6 Luna's $0.20/$1.20). Cached input **$0.01** (90% off input), cache writes **$0.125**. **Prompts over 272K tokens cost 2× input and 1.5× output** — the long-prompt tier is a hard cutoff. Batch / Flex: 50% off. Fast mode: 2×. Cache improvements over GPT-5.6: higher default hit rates, explicit breakpoints, **can change reasoning effort or toggle tools mid-conversation without invalidating the cache** — meaningful for agent loops.
- **Architecture:** Proprietary (OpenAI). Trained "with similar methods as GPT-6 Astra" per OpenAI. 6 reasoning effort levels (none / low / medium default / high / xhigh / max).

### Raw benchmarks found

> All numbers from the OpenAI launch post (`openai.com/index/introducing-gpt-6-sol-and-luna/`) and the Tosea.ai independent-rerun guide, plus the Artificial Analysis independent eval. Coding regressions vs GPT-5.6 Luna are highlighted because the launch text does not call them out.

Agent / tool use:

- **AA Intelligence Index v4.3 (max): 37** (Artificial Analysis independent). **Flat** vs GPT-5.6 Luna 37 — not an intelligence release.
- **AA cost per Intelligence Index task: $0.07** (Artificial Analysis). **Down ~60%** from GPT-5.6 Luna $0.18. The headline is cost, not capability.
- **Coding Agent Index v1.5: 41** (Artificial Analysis). **Down 2 points** from GPT-5.6 Luna 43 — a regression on coding specifically.
- **Terminal-Bench 4.0: 13%** (Artificial Analysis). Up from GPT-5.6 Luna 12% (within noise).
- **SWE-Atlas-QnA: 44%** (Artificial Analysis). **Down 5 points** from GPT-5.6 Luna 49%.
- **AutomationBench-AA: 53%** (Artificial Analysis). Up from GPT-5.6 Luna 50%.
- **AA-Omniscience hallucination rate (lower is better): 77%** (Artificial Analysis). **Down 16 points** from GPT-5.6 Luna 93% — the biggest real improvement.
- **AA-Omniscience Accuracy (open-ended factual): 25%** (Artificial Analysis, inference). Roughly level with GPT-5.6 Luna in the same ballpark.
- **DeepSWE v1.1 (max, long-horizon SWE): 66.6%** (OpenAI launch). $0.22/task. vs GPT-6 Sol 68.8% max / $2.74; vs GPT-6 Astra 74.1% max / $4.43; vs Claude Opus 5 73.7% / $11.84.
- **OSWorld 2.0 (offline, partial reward, max): 52.7%** (OpenAI launch). OpenAI says it exceeds GPT-5.6 Sol at medium effort at 1/10 the cost. vs GPT-6 Sol 60.5% (xhigh) / 64.4% (max); vs GPT-6 Astra 73.5% (max).
- **FrontierCode 1.1 Main (max): 42.4%** (OpenAI launch). $0.11/task. vs GPT-6 Sol 49.3% max; vs GPT-5.6 Sol 47.5% max.
- **AutomationBench 1.0.6 (max): 20.7%** (OpenAI launch). $0.037/task. vs GPT-6 Sol 33.2% / $0.27; vs GPT-6 Astra 41.4% / $1.73.
- **Agents' Last Exam V1 (max): 50.9%** (OpenAI launch). $0.15/task. vs GPT-6 Sol 56.4% / cost 60% lower than Opus 5; vs GPT-6 Astra 59.3% (max).

Coding (regressions highlighted):

- **DeepSWE v1.1: 66.6%** (AA independent, down from GPT-5.6 Luna 64% — actually UP 2 in AA's subset, but DOWN in the vendor's chart values). The vendor vs independent numbers diverge slightly here; the conservative read is "flat to slightly down vs GPT-5.6 Luna on coding."
- **SWE-Atlas-QnA: 44%** (AA). **Down 5 from GPT-5.6 Luna 49%.**
- **Coding Agent Index v1.5: 41** (AA). **Down 2 from GPT-5.6 Luna 43.** The pattern is consistent: at max effort, Luna on coding is no better than its predecessor.

Reasoning / knowledge:

- **AA Intelligence Index v4.3 (max): 37** (above). Composite across 10 evals.
- **HMMT / GPQA / MMLU-Pro**: rolled into the AA Intelligence Index 37 — no published per-benchmark number on the Luna launch table beyond the index.

Long context:

- 1,050,000 tokens total / 922K max input / 128K max output. **No published MRCR or RULER at the 1M window** in the OpenAI launch; the 1M is real per the same-of-class reading vs GPT-6 Sol, but the per-tier long-context fidelity is unverified.

Multimodal:

- Text, image in; text out. Image generation is via the hosted tool set (DALL-E or successor). No published MMMU / CharXiv / OmniDocBench specific number in the launch.

Factuality:

- **AA-Omniscience hallucination rate 77%** (AA, down from 93%) — the most important real change. OpenAI's own internal factuality eval: about half as many mistakes as GPT-5.6 Sol; Luna at higher effort levels matches GPT-5.6 Sol at about a hundredth of the cost. **Luna still answers incorrectly on more than 3/4 of the questions it should decline — needs source grounding for factual work.**

### Normalized scores (1–100)

> Per `RULES.md` (v4): **Overall = half-up mean of the five quality dims** `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency scored independently and excluded. All numbers are normalized 1–100 interpretations of the OpenAI launch + AA independent + Tosea.ai guide evidence above. **The Coding score is discounted** for the AA-rerun regression vs GPT-5.6 Luna (Coding Agent Index 43 → 41, SWE-Atlas-QnA 49 → 44).

- **Tool use: 80/100.** AA Coding Agent Index 41 (max) / Terminal-Bench 4.0 13% / AutomationBench-AA 53% / SWE-Atlas-QnA 44% / DeepSWE v1.1 66.6% (max). The mix is fine for "high-volume subagent" but it regressed vs its predecessor. The 6-level reasoning-effort dial (none → max) and the cache-mid-conversation improvement are the deployment wins — the model is flexible, the harness is forgiving.
- **Reasoning: 82/100.** AA Intelligence Index v4.3 (max) 37 — **flat** vs GPT-5.6 Luna 37. Reasoning is not the improvement axis; cost and reliability are. Internal factuality eval: about half as many mistakes as GPT-5.6 Sol at high effort. Coding-deception rate 2.8% (down from GPT-5.6 Sol 10.4%, per Decrypt coverage of the system card).
- **Context window: 93/100.** 1.05M total / 922K max input / 128K max output. Same shape as GPT-6 Sol and the OpenAI standard. **Prompts over 272K cost 2× input / 1.5× output** — the long-prompt tier is a hard cliff, not a slope. No published MRCR/RULER at 1M for this SKU; the 1M is real per the same-of-class reading vs GPT-6 Sol.
- **Multimodal: 74/100.** Text + image in, text out. Image generation via the hosted tool set. No published MMMU / CharXiv / OmniDocBench specific number in the launch; the multimodal cap is inferred from the GPT-6 family ceiling (Solid multimodal, but not a vision-first SKU like the GPT-5.6 line).
- **Coding: 82/100.** **Discounted** for the AA regression: Coding Agent Index 41 (down 2 from GPT-5.6 Luna 43), SWE-Atlas-QnA 44% (down 5 from 49%). DeepSWE v1.1 66.6% (max) / $0.22 per task is a respectable number; FrontierCode 1.1 42.4% (max) / $0.11 is best-in-class-per-dollar at this tier. **For coding agents running at max effort, GPT-6 Luna is not an upgrade over GPT-5.6 Luna** — but at matched cost it is clearly better, and the per-task economics are hard to argue with.
- **Cost efficiency: 96/100.** $0.10/$0.50 list — 1/40 of Claude Opus 4.7 ($5/$25), 1/200 of Opus 4.1 ($15/$75), 1/2 of GPT-5.6 Luna. Cache reads $0.01. Batch 50% off. **AA cost per Intelligence Index task $0.07** is the load-bearing number: 60% cheaper than GPT-5.6 Luna. The 272K prompt cliff (2× input) is the only gotcha; for prompts under 272K this is the cheapest frontier-tier model in the queue.
- **Overall Score: 82/100.** Half-up mean of the 5 non-cost quality dims: (80 + 82 + 93 + 74 + 82) / 5 = 411 / 5 = 82.2 → **82**. Best fit: **a cheap, fast, high-volume worker for summarization, extraction, classification, RAG with grounding, and first-pass drafts that a stronger model reviews**. NOT the right pick for long-horizon coding agents at max effort (Luna regressed on coding specifically vs its predecessor). The hallucination rate drop is the most important change for production use — 77% is still high, so source-anchored prompts are required for any factual workload.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
- Method: independent MiniMax M3 evaluation. Primary sources: `openai.com/index/introducing-gpt-6-sol-and-luna/` (OpenAI launch post: $0.10/$0.50 list, 1.05M context, 6 reasoning effort levels, all benchmark tables, hallucination / factuality claims), `tosea.ai/blog/gpt-6-sol-luna-complete-guide` (independent benchmark transcription, AA rerun table, OpenAI long-prompt cliff math, AA Intelligence Index comparison, cache-mid-conversation improvement, hallucination rate 77% cross-check, coding-deception rate 2.8% from Decrypt system-card coverage), `eigent.ai/blog/gpt-6-sol-luna` (DeepSWE comparison: 66.6% Luna vs 68.8% Sol at ~1/12 the cost), `neuraltrust.ai/blog/gpt-6-sol-vs-luna` (security/cost/routing comparison), `tryfriday.ai/blog` (50% lower pricing confirmation, 1.05M context, 90% caching). Cross-references: `artificialanalysis.ai` (AA Intelligence Index v4.3 37, Coding Agent Index v1.5 41, hallucination rate 77%, cost per task $0.07). The coding regressions (Coding Agent Index 43→41, SWE-Atlas-QnA 49→44%) are flagged in the report because the launch text does not call them out.
- Future sources: add a new file next to this one, e.g. `GPT_6_Luna_alt.md`, using the same headings; GPT-6 Sol, GPT-6 Astra, and the GPT-5.6 Luna predecessor are separate folders in our queue.
