# Qwen3.8-Flash-Next — findings by DeepSeek 4.1 Flash

- Source: Alibaba Cloud/Qwen (`qwen/qwen3.8-flash-next`)
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-05)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: official Hugging Face model card `Qwen/Qwen3.8-Flash-Next`, the first-party QwenCloud `qwen3.8-flash` model page, LLM Stats, plus the earlier Artificial Analysis / BenchmarkList aggregates).
> **Newly found rows (official HF card):** GPQA Diamond **91.7%**, HLE **35.9%** (GPT-4o-judged; Claude Opus 4.6 leads the vendor comparison table at 40.0), LiveCodeBench v6 **91.9%**, IFBench **81.3%**, DeepSWE 1.1 **58.7%**, SWE-bench Pro **62.5%**, SWE-bench Multilingual **81.0%**, NL2Repo-Bench **48.1%**, CoWorkBench **73.9%**, JobBench **55.7%**, Toolathlon Verified **73.5%**, Agents' Last Exam **pass@1 24.3 / score 51.2**; vision **ClawEval-MM 64.4% pass@3 / 60.4 avg**, **AndroidWorld 84.5%**, **OSWorld 2.0 19.4% binary / 52.3% partial**, **Vision2Web 64.0%**, **ERQA 72.3%**, **LVBench 76.6%**, **RealWorldQA 88.5%**, **MathVision 90.6% / 95.7% with CI**, **CharXiv (RQ) 84.6% / 90.6% with CI**. QwenCloud adds the production sibling **`qwen3.8-flash`**: 1M context by default, official built-in tools (web search, code interpreter, PDF parsing, web fetch), **$0.15/$0.47 per 1M** (implicit cache $0.016), max output 131K, 2M TPM / 15K RPM.
> **Factual corrections:** (1) context is **262,144 native, extensible to 1,000,000** per the vendor card — the earlier pass's "1,048,576 (1M)" is now stated as **1M (1,000,000)**, not 2^20. (2) Input price is **$0.15** (QwenCloud first-party), not the earlier tracker-quoted $0.16. (3) Architecture is now pinned by the vendor: **125B (6B activated) + 51B N-gram embedding + 4B MTP**, 48 layers, 512 experts (10 routed + 1 shared), Qwen Sparse Attention budget 512 blocks / 2048 tokens — no material change to the earlier "~180B total / ~6B active". (4) The prior pass's MathVision 90.6 / LVBench 76.6 / ERQA 72.3 / CharXiv-R 84.6 rows are now vendor-confirmed; the "RealWorldQA rank 1/31" claim remains **unverified**.
> **Conflicts surfaced:** (1) **GPQA Diamond 91.7% (vendor HF)** vs **92.3% (earlier pass)** — small source/harness difference. (2) **HLE 35.9% (vendor HF, GPT-4o-judged)** vs **38.0% (earlier pass)** — the vendor row is lower. (3) **AA Intelligence Index 39.8 / #56 of 427 and AIIQ 113** are carried over from the 2026-10-05 pass; the Artificial Analysis model page was **not reachable this pass (404)**, so those independent rows remain **unre-verified**. (4) Terminal-Bench 2.1 86.1% and SciCode 50.6% are carried over and are not on the vendor card.
> Sources: https://huggingface.co/Qwen/Qwen3.8-Flash-Next · https://www.qwencloud.com/models/qwen3.8-flash · https://llm-stats.com/models/qwen3.8-flash-next · https://huggingface.co/Qwen/Qwen3.8-Flash-Next/discussions/12

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Alibaba's open-weight sparse MoE "flash" release and an experimental preview of the forthcoming Qwen4 architecture (`qwen4_exp`); strongest at repository-level coding and long-horizon agentic work while staying cheap and locally runnable. The production sibling `Qwen3.8-Flash` on QwenCloud is the same base shipped with 1M context by default and official built-in tools.
- **Provider / access:** Alibaba Cloud / Qwen Team. OpenRouter `qwen/qwen3.8-flash-next`; weights on Hugging Face `Qwen/Qwen3.8-Flash-Next`; first-party QwenCloud `qwen3.8-flash`; free web chat with tools at chat.qwen.ai. Chat Completions-compatible (also Responses and Anthropic-compatible) API.
- **Release / knowledge:** Released 2026-08-26 (Hugging Face card / LLM Stats; launch post `qwen.ai/blog?id=qwen3.8-flash-next`); knowledge cutoff not officially stated.
- **IDs:** `qwen/qwen3.8-flash-next` (OpenRouter / Qwen native); first-party `qwen3.8-flash` (QwenCloud); no OpenCode Zen Free ID verified.
- **Context window:** 262,144 tokens native, extensible to 1,000,000 (1M) via YaRN (vendor HF card). QwenCloud lists 1M context with max input 991K / max output 131K; HF best practices suggest 262,144 reasoning + 131,072 final output within the 1M window.
- **Modalities:** Text, image, and video in; text out. Reasoning model (thinking on by default; `reasoning_effort` xhigh/medium/low), tool calling, JSON/structured output. N-gram embedding table offloadable to system RAM.
- **Pricing (as of 2026-10-16):** **$0.15 in / $0.016 cached / $0.47 out per 1M tokens** (QwenCloud official; implicit cache $0.016, explicit cache create $0.20 / read $0.016); free 1M-context web chat on chat.qwen.ai. OpenRouter/BenchmarkList quoted $0.16 in earlier passes — the first-party $0.15 rate is used now.
- **Architecture:** 125B LM (6B activated) + 51B N-gram embedding + 4B MTP ≈ **180B total, ~6B active per token**; 48 layers, hidden 2560, 512 experts (10 routed + 1 shared), Qwen Sparse Attention budget 512 blocks / 2048 tokens, hybrid Gated DeltaNet + QSA attention. Open weights (Qwen Community License 1.0; separate license above 100M MAU or $20M monthly revenue, or for model-as-a-service).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA (**Elo**, Artificial Analysis): **1,743** (rank 10/352, 97th pct) — carried over from the 2026-10-05 pass; AA page unre-verified this pass
- Tau3-Banking: **45.4%** (rank 10/176, 95th pct; carried over; field leader GLM-5.3 50.3%)
- AA-Briefcase: **1,583 Elo** (rank 10/145, 94th pct; rubric pass 54.1%) — carried over
- JobBench: **55.7%** (official HF card)
- AndroidWorld: **84.5%** (official HF card)
- ClawEval-MM: **64.4% pass@3 / 60.4 average** (official HF card)
- Toolathlon Verified: **73.5% pass@1** (official HF card)
- Agents' Last Exam: **pass@1 24.3 / score 51.2** (official HF card)
- CoWorkBench: **73.9%** (official HF card, in-house long-horizon office benchmark)
- OSWorld2.0 (computer use): **19.4% binary / 52.3% partial** (official HF card)
- CorpBench Work 1.3: **62.9** (rank 13/16, 20th pct) — carried over

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (official HF card) vs **92.3%** (earlier 2026-10-05 pass) — small source/harness difference
- HLE: **35.9%** (official HF card, GPT-4o-judged; Claude Opus 4.6 leads the vendor table at 40.0) vs **38.0%** (earlier pass)
- Artificial Analysis Intelligence Index: **39.8 / #56 of 427** (87th pct) — carried over; AA model page not reachable this pass
- AIIQ Composite IQ: **113 / #66 of 147** (55th pct) — carried over
- IFBench (instruction following): **81.3%** (official HF card)
- RealWorldQA: **88.5%** (official HF card; the earlier "rank 1/31" claim is unverified)

Coding:

- LiveCodeBench (official, v6): **91.9%** (official HF card)
- SWE-bench Multilingual: **81.0%** (official HF card, mini-SWE-agent harness)
- SWE-bench Pro: **62.5%** (official HF card, Claude Code harness)
- DeepSWE 1.1: **58.7%** (official HF card; best of Claude Code / mini-SWE-agent harnesses)
- NL2Repo-Bench: **48.1%** (official HF card, Claude Code harness)
- Vision2Web: **64.0%** (official HF card; frontend / webpage / website average)
- Terminal-Bench 2.1: **86.1%** (rank 17/194, 92nd pct) — carried over; not on the vendor card
- SciCode: **50.6%** (rank 50/296, 83rd pct) — carried over
- WebDev Arena (Arena AI / LMArena): **1622.28 Elo** (rank 9/105, 92nd pct) — carried over

Long context:

- AA-LCR: **79.7%** (rank 49/408, 88th pct) — carried over
- Vendor best practices: 262,144 reasoning + 131,072 final output inside the 1M window; retrieval at 1M remains unverified

Vision (vendor HF card):

- MathVision **90.6% / 95.7% with CI**, CharXiv (RQ) **84.6% / 90.6% with CI**, LVBench **76.6%**, ERQA **72.3%** — the prior pass's values, now vendor-confirmed

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval-AA 1,743 and Tau3-Banking 45.4% are near the frontier band (frontier ≈1750 Elo / ~50%), and the vendor card adds Toolathlon Verified 73.5%, CoWorkBench 73.9% and AndroidWorld 84.5%; capped by weaker long-horizon scores (Agents' Last Exam pass@1 24.3, OSWorld2.0 19.4% binary, CorpBench 20th pct) and occasional JSON tool-call chaining quirks.
- **Reasoning: 78/100.** Vendor GPQA 91.7% still clears the 90% frontier line, but HLE is corrected down to 35.9% (vendor; earlier 38.0%) — further under the 40% mark — and the carried-over AA Intelligence Index 39.8 sits far below the 60+ frontier band with AIIQ 113 only mid-pack. Unchanged, as the corrections are small and offsetting.
- **Context window: 84/100.** 262,144 native + YaRN extension to 1,000,000 maps into the upper 200K–500K band with an extension bump (vendor states 1M = 1,000,000, not the earlier 2^20 1,048,576); retrieval at 1M is unverified so it stops short of the ≥1M (95–100) tier.
- **Multimodal: 82/100.** Text/image/video in with text out, vendor-confirmed by measured rows (RealWorldQA 88.5%, MathVision 90.6% / 95.7% with CI, LVBench 76.6%, ERQA 72.3%, CharXiv-R 84.6%) places it in the +video band; no audio in or non-text out caps it.
- **Coding: 82/100.** LiveCodeBench 91.9% and SWE-bench Multilingual 81.0% are frontier-class, and carried-over Terminal-Bench 2.1 86.1% helps, but SWE-bench Pro 62.5% and DeepSWE 58.7% trail the 74% frontier DeepSWE reference, holding the composite back.
- **Cost efficiency: 90/100.** $0.15/$0.47 per 1M with a 1M-context free web tier is excellent value for the benchmark profile; free tier carries a data-use caveat and the output price is above the ~$0.20 band that would score 97+.
- **Overall Score: 82/100.** Mean of (84 + 78 + 84 + 82 + 82) / 5 = 82.0 → **82**. Best-fit: budget open-weight agentic coding and long-repo refactoring where local/cheap inference matters more than absolute frontier reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-16
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Hugging Face model card (`Qwen/Qwen3.8-Flash-Next`), the first-party QwenCloud `qwen3.8-flash` page and LLM Stats, correcting the YaRN target (1M = 1,000,000, not 1,048,576) and the input price ($0.15), pinning the architecture (125B LM + 51B N-gram + 4B MTP) and adding the full vendor benchmark table (GPQA 91.7, HLE 35.9, LiveCodeBench 91.9, DeepSWE 58.7, SWE-bench Pro 62.5, Toolathlon 73.5, vision rows) over the 2026-10-05 pass. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
