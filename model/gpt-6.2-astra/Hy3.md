# GPT-6.2 Astra — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** GPT-6.2 Astra is OpenAI's next-generation successor to GPT-6 Astra. As of 2026-11 it appears to be in small-scale gray testing — some Codex users' usage stats surfaced a distinct "gpt-6.2-astra" model identifier (up to ~19.8% of calls for some accounts), and a Google Cloud quota page briefly listed it. Public, verifiable data is limited, so scores below carry low confidence.

## Model card
| Field | Value |
|---|---|
| Vendor | OpenAI |
| Status | Small-scale gray test (2026-11); not broadly available |
| Predecessor | GPT-6 Astra |
| Context window | Not officially published (estimated large; unconfirmed) |
| Notable eval | BenchCAD 2.0 (3D engineering design + code + physics + PCB) |

## Raw benchmarks
- **Agent / Tool use:** Surfaced via Codex harness usage; strong agentic coding signal implied by BenchCAD performance.
- **Reasoning:** BenchCAD 2.0 average score reported at ~0.875, a ~47.3% lift over GPT-6 Astra; ranked #1 on the custom BenchCAD Codex Harness (0.875 vs Claude Fable 5.2's 0.835).
- **Coding:** BenchCAD 2.0 (100 real engineering cases: reconstruct 3D parts/assemblies, resolve PCB connections) shows SOTA-class engineering coding. Early users note a "defensive-alignment" quirk: occasional spurious gatekeeping/validation code inserted into otherwise-passing solutions.
- **Long context:** No explicit figure verified.

## Normalized scores
- **Tool use: 82/100.** Codex-harness agentic signal; limited public verification.
- **Reasoning: 84/100.** BenchCAD 0.875 is a strong single-signal; broader reasoning unverified.
- **Context window: 80/100.** Assumed large (inherited from GPT-6 Astra line); unconfirmed.
- **Multimodal: 78/100.** No explicit multimodal claims verified for this build.
- **Coding: 86/100.** BenchCAD SOTA-class engineering coding, with noted alignment quirks.
- **Cost efficiency: 55/100.** Gray-test, not broadly available, likely premium; no public pricing.
- **Overall Score: 82.0/100.** Mean of the five quality dims (82+84+80+78+86 = 410 / 5 = 82.0). Low confidence — pending general availability.

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GPT-6.2%20Astra/69651493
  - http://h5.ifeng.com/c/vivo/v002LVALfvVVLJ9hNM8q6JX8eF--ypy4d6WhFHlJnZr5TN70__
  - https://hub.baai.ac.cn/view/59368
  - https://post.smzdm.com/p/anvm333p/
  - https://www.zhihu.com/pin/2104275656821454399
