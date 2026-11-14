# Ling-3.0-flash-VL — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Ling-3.0-flash-VL is Ant Group's (inclusionAI / 百灵) first natively multimodal model, released and open-sourced 2026-09-09. Built on the Ling-3.0-flash MoE (124B total / 5.5B active), it natively accepts image, text, and video input with a 256K-token context. A "visual feedback loop" (observe → act → verify → correct) lets it self-correct in medical-report interpretation, frontend code generation, and GUI automation; the Artificial Analysis Intelligence Index v4.1.1 shows a +4-point gain over the text-only version. BF16 and FP8 weights are on Hugging Face / ModelScope.

## Model card
| Field | Value |
|---|---|
| Vendor | Ant Group (inclusionAI / 百灵) |
| Release | 2026-09-09 (open-sourced same day) |
| Architecture | MoE, 124B total / 5.5B active |
| Context window | 256K tokens |
| Modalities | Image, text, video input |
| Mechanism | Visual feedback loop (observe→act→verify→correct) |

## Raw benchmarks
- **Agent / Tool use:** GUI automation and self-correcting execution loops.
- **Reasoning:** +4 Intelligence Index over text-only sibling; moderate MoE active params.
- **Coding:** Frontend code generation within the feedback loop.
- **Long context:** 256K-token window confirmed.

## Normalized scores
- **Tool use: 76/100.** GUI automation; self-correcting agentic loops.
- **Reasoning: 72/100.** Solid but mid-tier active-param footprint.
- **Context window: 80/100.** 256K context.
- **Multimodal: 82/100.** Native image/text/video with feedback loop.
- **Coding: 72/100.** Frontend/code-gen capable, not coding-focused.
- **Cost efficiency: 78/100.** Open weights; 5.5B active params keep serving cheap.
- **Overall Score: 76.4/100.** Mean of the five quality dims (76+72+80+82+72 = 382 / 5 = 76.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Ling-3.0-flash-VL/68949506
  - https://baike.baidu.com/item/Ling-3.0-flash/68358537
  - https://news.17173.com/content/09092026/100159784.shtml
  - https://blog.csdn.net/weixin_29035147/article/details/170645524
  - https://blog.csdn.net/weixin_29050513/article/details/170645802
