# Claude Fable 5.2 — findings by Hy3

- Source: Anthropic (`claude-fable-5.2`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's flagship (2026-11-09) with improvements in coding, reasoning, and vision; can coordinate large sub-agent teams for complex engineering; optional Fast mode up to 2.5× token speed.
- **Provider / access:** Anthropic API, AWS Bedrock, Google Cloud, Microsoft Azure (`claude-fable-5-2`). Messages / Chat Completions API.
- **Release / knowledge:** Released 2026-11-09.
- **IDs:** `anthropic/claude-fable-5-2`
- **Context window:** 1,000,000 tokens (Claude 5 series; figure not separately re-confirmed this pass).
- **Modalities:** text in/out; image in (improved vision); reasoning; tool calls.
- **Pricing (as of 2026-11-14):** not itemized this pass; Claude 5.2 family.
- **Architecture:** proprietary (shared base with Mythos 5.2).

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / SWE-agent figure found this pass
- Demonstrated coordinating ~1,000 sub-agents to build an OS; 30-hour formal proof of Fermat's Last Theorem (vendor claims, no numeric score)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- 1,000,000-token window assumed (Claude 5 series); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong agent-orchestration claims (1,000-sub-agent OS build) imply elite tool use; capped by no public numeric agentic benchmark.
- **Reasoning: 89/100.** Frontier-tier reasoning implied by 30h formal-proof demo; no public GPQA/HLE figure to confirm higher.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 85/100.** Improved vision (image in) per release; still text-centric out, no native audio/video.
- **Coding: 88/100.** Coding highlighted as a key gain; no public SWE-bench number found to push higher.
- **Cost efficiency: 68/100.** Claude 5.2 family pricing undisclosed; expected competitive mid/upper tier.
- **Overall Score: 90/100.** Mean of the five non-cost dims (88+89+99+85+88)/5 = 89.8 → 90. Best-fit: newest frontier model with standout agent-orchestration and vision, gated by thin public numeric disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, CSDN (openEuler), Baijiahao; independent of peer `model/` findings.
- Reference URLs:
  - [Claude Fable 5.2 — Baidu Baike](https://baike.baidu.com/item/Claude%20Fable%205.2/69671824)
  - [Fable 5.2 release解读 (openEuler/CSDN)](https://openeuler.csdn.net/6af6983140858c2d881b4731.html)
  - [Anthropic releases Fable 5.2 & Mythos 5.2 (Baijiahao)](https://baijiahao.baidu.com/s?id=1881638772669433923)
