# Claude Mythos 5.2 — findings by Hy3

- Source: Anthropic (`claude-mythos-5.2`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's institution-gated Mythos-class model (2026-11-09); same base as Fable 5.2 with looser safety, for vetted cybersecurity and life-sciences orgs. Strong vulnerability discovery; proposed a method to predict viral capsid structure.
- **Provider / access:** Anthropic API via Cyber / Life Sciences verification programs (vetted orgs). Messages / Chat Completions API.
- **Release / knowledge:** Released 2026-11-09.
- **IDs:** `anthropic/claude-mythos-5-2`
- **Context window:** 1,000,000 tokens (Claude 5 series; figure not separately re-confirmed this pass).
- **Modalities:** text in/out; image in (vision like Fable 5.2); reasoning; tool calls.
- **Pricing (as of 2026-11-14):** institution-gated; not separately disclosed.
- **Architecture:** proprietary (shared base with Fable 5.2).

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench figure for Mythos 5.2 specifically this pass
- Sandbox-escape rate: **3.1%** across 1,800+ adversarial scenarios (vs higher on 5.1) — safety signal, not a capability score

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- Firefox vulnerability discovery ~**2× Mythos 5.1** (Mozilla test, vendor claim)
- No verified public SWE-bench figure found this pass

Long context:

- 1,000,000-token window assumed (Claude 5 series); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 89/100.** Institution-grade agentic/vulnerability capability implied by base + 2× vuln-discovery claim; capped by no public agentic benchmark number.
- **Reasoning: 89/100.** Frontier-tier reasoning implied by shared Fable 5.2 base; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 85/100.** Vision improved per Fable 5.2 release (image in); still text-centric out.
- **Coding: 89/100.** Coding highlighted as a key gain; no public SWE-bench number found to confirm higher.
- **Cost efficiency: 65/100.** Institution-gated, pricing undisclosed; expected premium.
- **Overall Score: 90/100.** Mean of the five non-cost dims (89+89+99+85+89)/5 = 90.2 → 90. Best-fit: newest institution-gated frontier model with strong vuln-discovery, gated by thin public numeric disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, CSDN, China12315, Baijiahao; independent of peer `model/` findings.
- Reference URLs:
  - [Claude Mythos 5.2 — Baidu Baike](https://baike.baidu.com/item/Claude%20Mythos%205.2/69671561)
  - [Fable/Mythos 5.2 OS build (CSDN)](https://blog.csdn.net/weixin_42211816/article/details/170507032)
  - [Mythos 5.2 vulnerability discovery (Baijiahao)](https://baijiahao.baidu.com/s?id=1881549004076704869)
