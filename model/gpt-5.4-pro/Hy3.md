# GPT-5.4 Pro — findings by Hy3

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's complex-task-optimized high-performance model (2026-03-05); focuses on long context and large professional tasks with native computer use.
- **Provider / access:** OpenAI API, ChatGPT, Codex. Chat Completions / Responses API.
- **Release / knowledge:** Released 2026-03-05.
- **IDs:** `openai/gpt-5.4-pro`
- **Context window:** 1,050,000 tokens in; 128,000 out (verified).
- **Modalities:** text in/out; image in; reasoning; native computer use; tool calls.
- **Pricing (as of 2026-11-14):** Pro tier (premium); exact rate not itemized this pass.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** (record, per Baike)
- OSWorld-Verified: **~75%** success rate (Baike)
- No verified public Terminal-Bench / τ²-Bench figure found this pass

Reasoning / knowledge:

- GDPval (professional tasks): **~83%** at/above industry-expert level (Baike)
- No verified public GPQA/HLE figure found this pass

Coding:

- No verified public SWE-bench figure found this pass

Long context:

- 1,050,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 89.3% (record) and OSWorld ~75% show strong web/computer-use; capped by no public agentic benchmark number.
- **Reasoning: 88/100.** GDPval ~83% at expert level implies strong knowledge work; no public GPQA/HLE figure found.
- **Context window: 100/100.** 1,050,000-token context (top tier).
- **Multimodal: 85/100.** Text + image in, native computer use; no verified audio/video generation.
- **Coding: 85/100.** Coding-focused Pro positioning; no public SWE-bench number found to push higher.
- **Cost efficiency: 55/100.** Pro-tier premium pricing; expected high.
- **Overall Score: 89/100.** Mean of the five non-cost dims (88+88+100+85+85)/5 = 89.2 → 89. Best-fit: long-context professional workhorse with record BrowseComp, gated by premium cost and limited coding disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, CSDN, NBD, Baijiahao; independent of peer `model/` findings.
- Reference URLs:
  - [GPT-5.4 Pro — Baidu Baike](https://baike.baidu.com/item/GPT-5.4%20Pro/67451275)
  - [GPT-5.4 release (CSDN)](https://blog.csdn.net/anyofai/article/details/158742887)
  - [GPT-5.4 series (NBD)](https://www.nbd.com.cn/rss/zaker/articles/4281234.html)
